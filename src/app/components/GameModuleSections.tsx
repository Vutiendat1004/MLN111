import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import questionBank from "../../../docs/game/question-bank-40.json";

const cardStyle: CSSProperties = {
  background: "#FFF8E6",
  border: "1px solid #E5E7EB",
  borderRadius: "14px",
  padding: "18px 16px",
};
const BOSS_DAMAGE_NORMAL = 20;
const BOSS_DAMAGE_FINAL = 22;
const NOISE_PER_WRONG = 28;
const NOISE_RESET_AFTER_LOSE_LIFE = 35;
const NOISE_REDUCE_ON_STAGE_CLEAR = 25;
const STARTING_LIVES = 3;
const QUESTIONS_PER_STAGE = 5;

export function GameConceptSection() {
  const [gameState, setGameState] = useState<"idle" | "playing" | "won" | "lost">("idle");
  const [currentStage, setCurrentStage] = useState<1 | 2 | 3 | 4>(1);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [bossHp, setBossHp] = useState(100);
  const [playerHp, setPlayerHp] = useState(STARTING_LIVES);
  const [noise, setNoise] = useState(0);
  const [selectedOption, setSelectedOption] = useState<"A" | "B" | "C" | "D" | null>(null);
  const [eliminatedOptions, setEliminatedOptions] = useState<("A" | "B" | "C" | "D")[]>([]);
  const [shieldActive, setShieldActive] = useState(false);
  const [message, setMessage] = useState("Bấm Bắt đầu để vào game.");
  const [hint, setHint] = useState("");
  const [items, setItems] = useState({
    glasses: 2,
    compass: 2,
    shield: 1,
  });

  const questionsByStage = useMemo(() => {
    const source = questionBank as QuestionItem[];
    return {
      1: source.filter((item) => item.stage === 1).slice(0, QUESTIONS_PER_STAGE),
      2: source.filter((item) => item.stage === 2).slice(0, QUESTIONS_PER_STAGE),
      3: source.filter((item) => item.stage === 3).slice(0, QUESTIONS_PER_STAGE),
      4: source.filter((item) => item.stage === 4).slice(0, QUESTIONS_PER_STAGE),
    };
  }, []);

  const currentQuestions = questionsByStage[currentStage];
  const currentQuestion = currentQuestions[questionIndex % currentQuestions.length];
  const showBattleUI = gameState !== "idle";
  const gameResult =
    gameState === "won"
      ? {
          title: "Bạn đã chiến thắng!",
          description: "Bạn đã hạ boss cuối và hoàn thành game. Chân lý phải được kiểm chứng bằng thực tiễn.",
          background: "rgba(34,197,94,0.12)",
          border: "1px solid rgba(34,197,94,0.35)",
          color: "#166534",
        }
      : gameState === "lost"
        ? {
            title: "Bạn đã thua!",
            description: "Bạn đã hết mạng vì nhiễu loạn nhận thức. Bấm Chơi lại từ đầu để thử lại.",
            background: "rgba(239,68,68,0.12)",
            border: "1px solid rgba(239,68,68,0.35)",
            color: "#991B1B",
          }
        : null;
  const bossNameByStage: Record<number, string> = {
    1: "Nữ Hoàng Cảm Xúc",
    2: "Quái Vật Lượt Like",
    3: "Nhà Ảo Thuật Ngụy Biện",
    4: "Nguồn Chân Lý Giả",
  };

  const resetRoundState = () => {
    setSelectedOption(null);
    setEliminatedOptions([]);
    setHint("");
  };

  const startGame = () => {
    setGameState("playing");
    setCurrentStage(1);
    setQuestionIndex(0);
    setBossHp(100);
    setPlayerHp(STARTING_LIVES);
    setNoise(0);
    setItems({ glasses: 2, compass: 2, shield: 1 });
    setShieldActive(false);
    setMessage("Trận đấu bắt đầu. Hãy chọn đáp án đúng để gây sát thương boss.");
    resetRoundState();
  };

  const moveToNextQuestion = () => {
    setQuestionIndex((prev) => (prev + 1) % currentQuestions.length);
    resetRoundState();
  };

  const useGlasses = () => {
    if (gameState !== "playing" || items.glasses <= 0) return;
    if (!currentQuestion) return;
    const options: ("A" | "B" | "C" | "D")[] = ["A", "B", "C", "D"];
    const wrong = options.filter((opt) => opt !== currentQuestion.correct);
    const pick: ("A" | "B" | "C" | "D")[] = [];
    while (pick.length < 2 && wrong.length > 0) {
      const index = Math.floor(Math.random() * wrong.length);
      pick.push(wrong.splice(index, 1)[0]);
    }
    setEliminatedOptions(pick);
    setItems((prev) => ({ ...prev, glasses: prev.glasses - 1 }));
    setMessage("Kính Lý Tính đã loại 2 đáp án sai.");
  };

  const useCompass = () => {
    if (gameState !== "playing" || items.compass <= 0) return;
    if (!currentQuestion) return;
    setItems((prev) => ({ ...prev, compass: prev.compass - 1 }));
    setHint(currentQuestion.explanation);
    setMessage("La Bàn Thực Tiễn đã mở gợi ý.");
  };

  const useShield = () => {
    if (gameState !== "playing" || items.shield <= 0) return;
    setItems((prev) => ({ ...prev, shield: prev.shield - 1 }));
    setShieldActive(true);
    setMessage("Lá Chắn Phản Biện đã kích hoạt. Sai 1 câu sẽ không bị nhiễu loạn.");
  };

  const submitAnswer = () => {
    if (gameState !== "playing" || !selectedOption || !currentQuestion) return;
    const isCorrect = selectedOption === currentQuestion.correct;

    if (isCorrect) {
      const damage = currentStage === 4 ? BOSS_DAMAGE_FINAL : BOSS_DAMAGE_NORMAL;
      const nextHp = Math.max(0, bossHp - damage);
      setBossHp(nextHp);
      setMessage(`Chính xác! Boss mất ${damage} máu.`);

      if (nextHp <= 0) {
        if (currentStage === 4) {
          setGameState("won");
          setMessage("Bạn đã đánh bại Nguồn Chân Lý Giả. Chân lý phải được kiểm chứng bằng thực tiễn.");
          return;
        }
        const nextStage = (currentStage + 1) as 1 | 2 | 3 | 4;
        setCurrentStage(nextStage);
        setQuestionIndex(0);
        setBossHp(100);
        setNoise((prev) => Math.max(0, prev - NOISE_REDUCE_ON_STAGE_CLEAR));
        setMessage(`Bạn đã qua Ải ${currentStage}. Tiến vào Ải ${nextStage}.`);
        resetRoundState();
        return;
      }
      moveToNextQuestion();
      return;
    }

    if (shieldActive) {
      setShieldActive(false);
      setMessage("Sai đáp án, nhưng Lá Chắn Phản Biện đã bảo vệ bạn.");
      moveToNextQuestion();
      return;
    }

    const nextNoise = noise + NOISE_PER_WRONG;
    if (nextNoise >= 100) {
      const nextHp = playerHp - 1;
      setPlayerHp(nextHp);
      setNoise(NOISE_RESET_AFTER_LOSE_LIFE);
      if (nextHp <= 0) {
        setGameState("lost");
        setMessage("Bạn đã bị nhiễu loạn nhận thức hoàn toàn. Hãy chơi lại để phục hồi tư duy lý tính.");
        return;
      }
      setMessage("Sai đáp án! Bạn mất 1 mạng vì nhiễu loạn nhận thức.");
    } else {
      setNoise(nextNoise);
      setMessage("Sai đáp án! Nhiễu loạn nhận thức tăng.");
    }
    moveToNextQuestion();
  };

  return (
    <section id="truth-hunter" style={{ padding: "80px 24px", background: "#FFF8E6", fontFamily: "'Be Vietnam Pro', sans-serif" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <span style={{ display: "inline-block", background: "rgba(234,179,8,0.18)", border: "1px solid rgba(234,179,8,0.4)", color: "#0F172A", fontSize: "11px", fontWeight: 700, letterSpacing: "1.2px", textTransform: "uppercase", borderRadius: "999px", padding: "5px 14px", marginBottom: "12px" }}>
            Module game học tập
          </span>
          <h2 style={{ margin: "0 0 10px", color: "#0F172A", fontSize: "30px", fontWeight: 800 }}>Truth Hunter</h2>
          <p style={{ margin: 0, color: "#475569", fontSize: "15px", lineHeight: 1.7, maxWidth: "760px", marginInline: "auto" }}>
            Người chơi vào vai Minh Triết, vượt qua thành phố mạng xã hội để đánh bại các boss thông tin sai lệch bằng nhận thức cảm tính, lý tính và kiểm chứng thực tiễn.
          </p>
        </div>

        <div style={{ marginTop: "20px", ...cardStyle }}>
          <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "10px", padding: "12px", marginBottom: "10px" }}>
            <p style={{ margin: "0 0 8px", fontSize: "13px", fontWeight: 800, color: "#0F172A" }}>Cách tính điểm & kỹ năng</p>
            <div style={{ display: "grid", gap: "5px" }}>
              <p style={{ margin: 0, fontSize: "12px", color: "#334155", lineHeight: 1.6 }}>
                1) Trả lời đúng: gây sát thương boss ({BOSS_DAMAGE_NORMAL} HP ở Ải 1-3, {BOSS_DAMAGE_FINAL} HP ở Ải 4).
              </p>
              <p style={{ margin: 0, fontSize: "12px", color: "#334155", lineHeight: 1.6 }}>
                2) Trả lời sai: tăng {NOISE_PER_WRONG}% nhiễu loạn nhận thức.
              </p>
              <p style={{ margin: 0, fontSize: "12px", color: "#334155", lineHeight: 1.6 }}>
                3) Khi nhiễu loạn đạt 100%: mất 1 mạng, thanh nhiễu loạn quay về {NOISE_RESET_AFTER_LOSE_LIFE}%.
              </p>
              <p style={{ margin: 0, fontSize: "12px", color: "#334155", lineHeight: 1.6 }}>
                4) Qua ải (boss về 0 HP): sang ải mới, boss reset 100 HP và giảm {NOISE_REDUCE_ON_STAGE_CLEAR}% nhiễu loạn.
              </p>
              <p style={{ margin: 0, fontSize: "12px", color: "#334155", lineHeight: 1.6 }}>
                5) Điều kiện thắng/thua: thắng khi hạ boss Ải 4, thua khi hết {STARTING_LIVES} mạng.
              </p>
              <p style={{ margin: 0, fontSize: "12px", color: "#334155", lineHeight: 1.6 }}>
                6) Kỹ năng: Kính Lý Tính (loại 2 đáp án sai), La Bàn Thực Tiễn (mở gợi ý), Lá Chắn Phản Biện (chặn 1 lần trả lời sai).
              </p>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "12px", flexWrap: "wrap", marginBottom: "12px" }}>
            {gameState !== "playing" ? (
              <button
                type="button"
                onClick={startGame}
                style={{ border: "1px solid rgba(15,23,42,0.15)", background: "rgba(234,179,8,0.2)", color: "#0F172A", borderRadius: "999px", padding: "8px 14px", fontSize: "12px", fontWeight: 700, cursor: "pointer" }}
              >
                {gameState === "idle" ? "Bắt đầu chơi" : "Chơi lại từ đầu"}
              </button>
            ) : (
              <span style={{ fontSize: "12px", fontWeight: 700, color: "#0F172A", background: "rgba(15,23,42,0.06)", borderRadius: "999px", padding: "7px 12px" }}>
                Ải {currentStage}: {bossNameByStage[currentStage]}
              </span>
            )}
          </div>

          {gameResult && (
            <div style={{ background: gameResult.background, border: gameResult.border, borderRadius: "10px", padding: "12px", marginBottom: "12px" }}>
              <p style={{ margin: "0 0 4px", fontSize: "15px", fontWeight: 800, color: gameResult.color }}>{gameResult.title}</p>
              <p style={{ margin: 0, fontSize: "13px", color: gameResult.color, lineHeight: 1.6 }}>{gameResult.description}</p>
            </div>
          )}

          {showBattleUI ? (
            <>
              <div style={{ display: "grid", gap: "10px", marginBottom: "12px" }}>
                <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "10px", padding: "12px 12px", display: "grid", gap: "8px" }}>
                  <div style={{ display: "grid", gap: "6px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", flexWrap: "wrap" }}>
                      <p style={{ margin: 0, fontSize: "12px", fontWeight: 700, color: "#475569" }}>Boss HP: {bossHp}/100</p>
                      <p style={{ margin: 0, fontSize: "12px", fontWeight: 700, color: "#475569" }}>Nhiễu loạn: {noise}%</p>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <p style={{ margin: 0, fontSize: "12px", fontWeight: 700, color: "#475569" }}>Mạng:</p>
                        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                          {Array.from({ length: STARTING_LIVES }).map((_, index) => {
                            const isAlive = index < playerHp;
                            return (
                              <span key={`life-${index}`} style={{ color: isAlive ? "#EF4444" : "#111827", fontSize: "14px", lineHeight: 1 }}>
                                ❤
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    <div style={{ height: "8px", borderRadius: "999px", background: "#E2E8F0", overflow: "hidden" }}>
                      <div style={{ width: `${bossHp}%`, height: "100%", background: "linear-gradient(90deg, #EF4444, #F97316)" }} />
                    </div>
                    <div style={{ height: "8px", borderRadius: "999px", background: "#E2E8F0", overflow: "hidden" }}>
                      <div style={{ width: `${noise}%`, height: "100%", background: "linear-gradient(90deg, #7C3AED, #A855F7)" }} />
                    </div>
                    <p style={{ margin: 0, fontSize: "11.5px", color: "#64748B", lineHeight: 1.6 }}>
                      Đúng: boss -{currentStage === 4 ? BOSS_DAMAGE_FINAL : BOSS_DAMAGE_NORMAL} HP · Sai: +{NOISE_PER_WRONG}% nhiễu loạn · Nhiễu loạn chạm 100%: -1 mạng và về {NOISE_RESET_AFTER_LOSE_LIFE}%.
                    </p>
                  </div>

                  {currentQuestion && (
                    <>
                      <p style={{ margin: "4px 0 0", fontSize: "13px", color: "#0F172A", fontWeight: 700 }}>
                        {displayQuestionCode(currentQuestion.id)}: {currentQuestion.question}
                      </p>
                      <div style={{ display: "grid", gap: "6px" }}>
                        {(["A", "B", "C", "D"] as const).map((label) => {
                          const eliminated = eliminatedOptions.includes(label);
                          const selected = selectedOption === label;
                          return (
                            <button
                              key={label}
                              type="button"
                              disabled={gameState !== "playing" || eliminated}
                              onClick={() => setSelectedOption(label)}
                              style={{
                                textAlign: "left",
                                border: selected ? "1px solid rgba(234,179,8,0.7)" : "1px solid #D1D5DB",
                                background: eliminated ? "#F3F4F6" : selected ? "rgba(234,179,8,0.12)" : "#fff",
                                color: eliminated ? "#9CA3AF" : "#334155",
                                borderRadius: "8px",
                                padding: "8px 10px",
                                fontSize: "12.5px",
                                cursor: gameState === "playing" && !eliminated ? "pointer" : "not-allowed",
                              }}
                            >
                              {label}. {currentQuestion.options[label]} {eliminated ? "(đã loại)" : ""}
                            </button>
                          );
                        })}
                      </div>
                      {hint && (
                        <p style={{ margin: 0, fontSize: "12px", color: "#0F172A", background: "rgba(15,23,42,0.06)", padding: "8px 10px", borderRadius: "8px" }}>
                          Gợi ý: {hint}
                        </p>
                      )}
                    </>
                  )}
                </div>
            </div>

              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "10px" }}>
                <button type="button" onClick={useGlasses} disabled={gameState !== "playing" || items.glasses <= 0} style={itemButtonStyle(gameState === "playing" && items.glasses > 0)}>
                  Kính Lý Tính ({items.glasses})
                </button>
                <button type="button" onClick={useCompass} disabled={gameState !== "playing" || items.compass <= 0} style={itemButtonStyle(gameState === "playing" && items.compass > 0)}>
                  La Bàn Thực Tiễn ({items.compass})
                </button>
                <button type="button" onClick={useShield} disabled={gameState !== "playing" || items.shield <= 0} style={itemButtonStyle(gameState === "playing" && items.shield > 0)}>
                  Lá Chắn Phản Biện ({items.shield}) {shieldActive ? "- ĐANG BẬT" : ""}
                </button>
                <button type="button" onClick={submitAnswer} disabled={gameState !== "playing" || !selectedOption} style={itemButtonStyle(gameState === "playing" && Boolean(selectedOption))}>
                  Chốt đáp án
                </button>
              </div>

              <div style={{ background: "rgba(15,23,42,0.06)", border: "1px solid rgba(15,23,42,0.08)", borderRadius: "10px", padding: "10px 12px" }}>
                <p style={{ margin: 0, fontSize: "12.5px", color: "#334155", lineHeight: 1.6 }}>{message}</p>
              </div>
            </>
          ) : (
            <div style={{ background: "rgba(15,23,42,0.06)", border: "1px dashed rgba(15,23,42,0.25)", borderRadius: "10px", padding: "12px" }}>
              <p style={{ margin: 0, fontSize: "12.5px", color: "#334155", lineHeight: 1.6 }}>
                Nhấn <strong>Bắt đầu chơi</strong> để hiện màn chiến đấu, thanh chỉ số và câu hỏi.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

type QuestionItem = {
  id: string;
  stage: number;
  question: string;
  options: Record<"A" | "B" | "C" | "D", string>;
  correct: "A" | "B" | "C" | "D";
  explanation: string;
  tags?: string[];
};

function itemButtonStyle(active: boolean): CSSProperties {
  return {
    border: "1px solid rgba(15,23,42,0.15)",
    background: active ? "rgba(234,179,8,0.2)" : "#E5E7EB",
    color: active ? "#0F172A" : "#64748B",
    borderRadius: "999px",
    padding: "7px 12px",
    fontSize: "12px",
    fontWeight: 700,
    cursor: active ? "pointer" : "not-allowed",
  };
}

function displayQuestionCode(rawId: string): string {
  const cleaned = rawId.replace(/^A\d+/i, "");
  return cleaned || rawId;
}
