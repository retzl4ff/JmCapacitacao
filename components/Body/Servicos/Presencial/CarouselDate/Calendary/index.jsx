const generateWeeks = (date) => {
  const today = new Date(date);
  const weeks = [];
  const year = today.getFullYear();
  const month = today.getMonth();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  let currentDay = 1 - (firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1);

  while (currentDay <= daysInMonth) {
    const week = [];
    for (let i = 0; i < 7; i += 1) {
      if (currentDay > 0 && currentDay <= daysInMonth) {
        week.push(currentDay);
      } else {
        week.push(null);
      }

      currentDay += 1;
    }
    weeks.push(week);
  }

  console.log(weeks);

  return weeks;
};

const weekDays = [
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
  "Domingo",
];

const monthNames = {
  1: "Janeiro",
  2: "Fevereiro",
  3: "Março",
  4: "Abril",
  5: "Maio",
  6: "Junho",
  7: "Julho",
  8: "Agosto",
  9: "Setembro",
  10: "Outubro",
  11: "Novembro",
  12: "Dezembro",
};

const coursesDays = {
  1: ["NR-35 (Trabalho em Altura)"],
  2: ["NR-18 + NR-35 (PEMT)", "NR-33 (Espaço Confinado)", "Socorrista"],
  3: [
    "NR-33 (Espaço Confinado)",
    "NR-33 Atualização (Espaço Confinado)",
    "Socorrista",
  ],
  4: ["NR-33 (Espaço Confinado Atualização)", "Socorrista"],
  5: ["Empilhadeira - Teoria (Formação e Atualização)"],
  6: [
    "B.P.C (Bombeiro Profissional Civil)",
    "Empilhadeira - Prática (Formação e Atualização)",
  ],
};

export default function Calendary({ date }) {
  return (
    <>
      <div className="d-flex justify-content-center">
        <span style={{ fontSize: "38px", fontWeight: "600" }}>
          {monthNames[(date.getMonth() === 12 ? 0 : date.getMonth()) + 1]}
        </span>
      </div>
      <table
        className="table table-bordered text-center"
        style={{ borderRadius: "20px", overflow: "hidden", height: "300px" }}
      >
        <thead>
          <tr>
            {weekDays.map((day) => (
              <th
                className="py-3 bg-blue"
                key={day}
                style={{ cursor: "default", fontSize: "13px" }}
              >
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {(() => {
            return generateWeeks(date).map((week, index) => (
              <tr key={index}>
                {week.map((day, idx) => {
                  const textMuted = day < date.getDate();

                  return (
                    <td
                      key={`${day}-${idx}`}
                      onClick={undefined}
                      className={textMuted && "text-muted"}
                      style={{
                        fontSize: (!textMuted && "16px") || "15px",
                        fontWeight: !textMuted && "600",
                        cursor: "pointer",
                        backgroundColor:
                          new Date().getDate() === day &&
                          date.getDate() === day &&
                          "rgba(207, 207, 207)",
                      }}
                    >
                      {day || ""}
                      {Number.isFinite(day) && (
                        <div
                          className="d-flex flex-column justify-content-around"
                          style={{ gap: "5px" }}
                        >
                          {coursesDays[idx + 1]?.map((course) => (
                            <span
                              className="text-center rounded p-1"
                              style={{
                                backgroundColor: "#030727",
                                fontSize: "14px",
                                fontWeight: "400",
                                color: "white",
                              }}
                            >
                              {course.split("(")[0]}
                            </span>
                          ))}
                        </div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ));
          })()}
        </tbody>
      </table>
    </>
  );
}
