# DORAEMON「タップ＆チャージ」システム提案の強化

## 序論とコンセプト概要

DORAEMON（Detached On-demand Rapid Absorption Energy Mechanism for Optimized Networks：最適化ネットワークのためのオンデマンド分離型高速吸収エネルギーメカニズム）は、50〜200 ms 程度の短時間接触によってデバイスへほぼ瞬時にエネルギーを移送する無線「タップ＆チャージ」システムを目指す提案です。本質は、エネルギー移送フェーズと使用フェーズを分離することにあります。すなわち、高出力の無線バーストでオンボードのエネルギー貯蔵（スーパーキャパシタによる「エネルギーキャビティ」）を急速に満たし、その後はデバイスのバッテリーへ時間をかけて放電・充電します。継続的な結合を必要とする従来の無線充電が抱える可動性の制約を、瞬間的な接触でのエネルギー注入により解決する発想です（例：[volfpackenergy.com](https://www.volfpackenergy.com/post/wireless-charging-with-supercapacitors#:~:text=,4V)）。

このアイデアを確かなものにするには、以下を包含する厳密な理論枠組みが必要です。

- 短時間パルス中の高効率な電磁結合（短時間接触で高い電力をどう達成するか）
- 中間貯蔵（スーパーキャパシタ）の高速吸収ダイナミクス（容量、ESR、リーク等の回路物理による限界）
- バッテリーへの最適放電制御（充電速度と寿命の両立）

以下では各要素を数理的に詳細化し、理論主張が物理的に妥当であることを示します。さらに、MATLAB/Simulink や Python によるソフトウェア実験で再現・検証できる形に整理します。

## 瞬時エネルギー移送のための電磁結合理論

### 相互インダクタンスと共振結合

送電・受電の2つの共振コイルは、結合した誘導システムを形成します。相互インダクタンス \(M\) は、送電コイルの磁束が受電コイルにどれほど結合するかを定量化します。一般形は次式で与えられます。

$$
M = \frac{\mu_0}{4\pi} \oint_{C_1} \oint_{C_2} \frac{d\vec{\ell}_1 \cdot d\vec{\ell}_2}{\lVert \vec r_1 - \vec r_2 \rVert}\,.
$$

幾何形状によっては数値計算が必要ですが、コイル間距離が小さいほど、また重なり面積が大きいほど \(M\) は大きくなります。結合係数は \(k = M/\sqrt{L_1 L_2}\) と定義されます（\(L_1,L_2\) は自己インダクタンス）。本提案のプロトタイプでは、ISM 帯の \(f_0 = 6.78\,\mathrm{MHz}\) に同調し、\(d \approx 12\,\mathrm{mm}\) で \(k \approx 0.42\) を達成しています。短時間で大電力を移送するには強結合が重要です。

共振動作では、各コイルにコンデンサ（\(C_1, C_2\)）を直並列に組み合わせ、\(\omega_0 = 2\pi f_0\) に同調させます。準静近傍場近似の下、ギャップ中の時刻調和磁界は \(\mathbf{H}(\mathbf{r},t) = \Re\{\mathbf{H}_0(\mathbf{r}) e^{j\omega_0 t}\}\) と書けます。2つのタンクが同一周波数で安定に同調している限り、エネルギー移送は最大化されます。デタニング \(\Delta\omega\) は、\(1/[1+(\Delta\omega\,\tau)^2]\) の因子で効率を大きく劣化させます（\(\tau\) は \(Q\) に依存）。したがって、タップ中に素早く同調を確立し、保持することが不可欠です。

### 伝送効率と最適負荷

等価回路モデルでは、\(R_1, R_2\) を各コイルの損失、\(R_L\) を負荷抵抗（整流・蓄電側で見込む有効負荷）とします。強結合共振リンクの最大効率は、よく知られるように \(k^2 Q_1 Q_2\) に依存します（\(Q_i = \omega_0 L_i / R_i\)）。最適負荷下での理想最大効率は

$$
\eta_{\max} = \frac{k^2 Q_1 Q_2}{\bigl(1+\sqrt{1+k^2 Q_1 Q_2}\bigr)^2}\,.
$$

例えば \(k^2 Q_1 Q_2 \approx 0.42^2\times 200\times 150 \approx 5290\) とすると \(\eta_{\max} \approx 94.7\%\) が得られ、提案値と整合します。これは市販無線充電より高効率で、配線充電にも迫ります。最適負荷は概ね \(R_{L,\mathrm{opt}} \approx R_2\sqrt{1+k^2 Q_1 Q_2}\) のスケーリングに従います（受信側損失とのバランス）。

なお、最大電力点と最大効率点は一般に一致しません。短時間での総捕獲エネルギーを最大化するには、高効率点近傍で運用する方が有利なことが多く、タップ＆チャージの要件に適います。

### 50 ms 窓を満たす応答性

6.78 MHz で 50 ms は約 34 万サイクルに相当し、定常移送には十分な周期数です。立上りは \(\tau \sim \tfrac{2Q_1 Q_2}{Q_1+Q_2}\,\omega_0^{-1}\) により決まり、MHz・\(Q\sim10^2\) では \(\mu\mathrm{s}\) オーダー。よって、50 ms の大半を効率的な移送に充てられます。電源側は所望のパルス電力を供給できる必要があり、熱ストレスを抑えるためデューティの設計・冷却も重要です（例：100 W × 50 ms = 5 J）。

アライメントの誤差は \(k\) を低下させ、効率を損ねます。短時間ではフィードバックで補正できないため、機械的ガイドや磁気吸引などで再現性高く位置決めする設計が有効です。

## スーパーキャパシタ群による高速吸収

### 充電ダイナミクスとエネルギー式

短時間パルスで受けたエネルギーは、まずスーパーキャパシタ（SC）群に取り込まれます。バッテリーは化学反応が遅くスパイク電流に不向きですが、SC は非常に高い出力密度で瞬時充放電が可能です（ただしエネルギー密度は低い）。

有効容量 \(C_{\mathrm{eff}}(V_c)\) と ESR \(R_{\mathrm{ESR}}\) を用いると、

- 電荷収支：\(\displaystyle \frac{dV_c}{dt} = \frac{I_{\mathrm{in}}-I_{\mathrm{leak}}(V_c)}{C_{\mathrm{eff}}(V_c)}\)
- 蓄積エネルギー：\(\displaystyle E(V_c)=\int_0^{V_c} C_{\mathrm{eff}}(V)\,V\,dV\)
- 入力電力の内訳：\(P_{\mathrm{in}} = P_{\mathrm{stored}} + P_{\mathrm{loss}} + P_{\mathrm{leak}}\)（各項は本文参照）

短時間（50 ms）ではリークは無視でき、支配的損失は ESR です。瞬時蓄積効率は

$$
\eta_{\mathrm{stor}}(I) = \frac{V_c I}{V_c I + I^2 R_{\mathrm{ESR}}} = \frac{1}{1+\frac{I R_{\mathrm{ESR}}}{V_c}}\,.
$$

従って、\(V_c\) が小さい初期に大電流を流すと \(I^2R\) 損失が卓越し非効率です。低 ESR の素子を選び、初期は中程度の電流で開始し、\(V_c\) の上昇とともに電流を高める「テーパ／ランプ」電流波形が有利です。

### 最大捕獲のための最適電流波形

目的は \(T_c\) 内に \(E(V_c(T_c))\) を最大化すること。制約は \(0\le I(t)\le I_{\max}\)、電圧・温度上限など。厳密には最適制御（Pontryagin の最小原理など）で解けますが、短時間ではバンバン制御に近い解（初期は抑えめ→中盤で増加→終盤でタップ）や単調ランプが実用的です。数値最適化（例：`fmincon`）でも同様の傾向が得られます。

熱は単発パルスでは大きく上がらず、累積で管理すれば十分です。

## 最適放電とバッテリー充電理論

SC に貯えたエネルギーは、分離後にバッテリーへ数十分かけて移されます（2段階充電：50 ms で SC 充電→30 分でバッテリー充電）。Randles モデル（OCV(SOC)、\(R_{\mathrm{int}}\)、RC 分枝）を用いると、端子電圧は

$$
V_{\mathrm{bat}}(t) = \mathrm{OCV}(\mathrm{SOC}) + I_{\mathrm{bat}}(t)\,R_{\mathrm{int}} + V_{RC}(t),\qquad
\tau_{RC}\,\dot V_{RC} + V_{RC} = I_{\mathrm{bat}} R_{RC}.
$$

実務的には CC–CV（定電流→定電圧）が最適制御の解と整合し、温度制約に達するまで最大許容電流で充電し、その後は制約（電圧/温度）に沿って電流を絞ります。モデル予測制御（MPC）や簡易クランプで実装可能です。

## コードによる検証フレームワーク

- 電磁結合：幾何・位置ズレ・距離・周波数に対する \(k\) と効率を FEM（COMSOL、Maxwell）または相互インダクタンス素子の回路モデルで走査。
- SC 充電：\(V_c(t)\) の ODE を ESR 損失込みで数値積分し、定電流 vs テーパ電流の効率を比較。最適化で波形を探索。
- バッテリー放電：SC 初期電圧から DC-DC を介して CC–CV 充電を模擬し、SOC 上昇と温度を評価。
- システム統合：相互インダクタ＋整流＋DC/DC＋熱のコシミュレーションでエッジケースを検査。

## 実現性と推奨

- 高性能部品：高 \(Q\) コイル（リッツ線等）と低 ESR SC（ミリオーム級）で \(\eta_{\mathrm{link}}\sim95\%\)、\(\eta_{\mathrm{stor}}\sim90\%\) を狙う。
- 安全と規制：6.78 MHz・100 W 級でも近接強結合とシールドで放射を抑え、近接検知・インタロックを実装。
- アライメント補助：ガイドや磁気吸着で再現性を確保。
- スケール感：スマホ・ウェアラブル等の中小電力で即効性が高い。EV 等の大容量は増パワーや複数タップが前提。
- 段/並列構成：並列受電→直列放電などの構成切替で電圧レベル最適化（要安全設計）。
- 適応制御：可変マッチング（バラクタ等）や学習で波形・同調を最適化。
- 多目的最適化：時間・効率・寿命の優先度に応じてモード切替（ブースト/エコ）。

結論として、DORAEMON のタップ＆チャージは厳密な理論・数値検証に照らして実現可能です。高周波共振結合で短時間・高効率のエネルギー移送が可能で、SC がそれを損失少なく捕獲し、バッテリーへ安全に移送できます。次段階として、コード実験に基づく小規模プロトタイプの構築が推奨されます。

## 参考文献（Sources）

- Kurs, A. ほか, “Wireless power transfer via strongly coupled magnetic resonances,” *Science*, 317(5834), 83–86 (2007).
- Wang, X. ほか, “Time-varying systems to improve the efficiency of wireless power transfer,” *Phys. Rev. Applied*, 21, 054027 (2024).
- Volfpack Energy Blog, “Wireless Charging with Supercapacitors – The Future of Fast, Convenient Energy Transfer,” 2023年3月 [volfpackenergy.com](https://www.volfpackenergy.com/post/wireless-charging-with-supercapacitors#:~:text=,250 Wh%2Fkg for batteries) [volfpackenergy.com](https://www.volfpackenergy.com/post/wireless-charging-with-supercapacitors#:~:text=This combination brings several notable,benefits) [volfpackenergy.com](https://www.volfpackenergy.com/post/wireless-charging-with-supercapacitors#:~:text=,4V)。
- ABB Press Release, “ABB demonstrates flash charging electric bus in 15 seconds,” 2013年6月3日 [new.abb.com](https://new.abb.com/news/detail/43929/abb-demonstrates-technology-to-power-flash-charging-electric-bus-in-15-seconds#:~:text=The flash,services%2C such as interior lighting)。
- Park, S. ほか, “Optimal Control of Battery Fast Charging Based on Pontryagin’s Minimum Principle,” *Proc. IEEE CDC*, 2020 [saehong.github.io](https://saehong.github.io/files/CDC2020-PMP.pdf#:~:text=Nearly all existing model,deterministic optimal control problem%2C there).
