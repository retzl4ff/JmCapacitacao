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

  return weeks;
};

const weekDays = [
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sábado',
  'Domingo',
];

const monthNames = {
  1: 'Janeiro',
  2: 'Fevereiro',
  3: 'Março',
  4: 'Abril',
  5: 'Maio',
  6: 'Junho',
  7: 'Julho',
  8: 'Agosto',
  9: 'Setembro',
  10: 'Outubro',
  11: 'Novembro',
  12: 'Dezembro',
};

export default function Calendary({ date }) {
  return (
    <>
      <div className="d-flex justify-content-center">
        <span style={{ fontSize: '38px', fontWeight: '600' }}>
          {monthNames[(date.getMonth() === 12 ? 0 : date.getMonth()) + 1]}
        </span>
      </div>
      <table
        className="table table-bordered text-center"
        style={{ borderRadius: '20px', overflow: 'hidden', height: '300px' }}
      >
        <thead>
          <tr>
            {weekDays.map((day) => (
              <th
                className="py-3 bg-blue"
                key={day}
                style={{ cursor: 'default', fontSize: '13px' }}
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
                      key={idx}
                      onClick={() => {
                        if (textMuted) return;

                        console.log(
                          'Olá! Gostaria de saber se existe uma turma aberta para realizar o curso de "NR-35" no dia',
                          day,
                          'de',
                          monthNames[
                            (date.getMonth() === 12 ? 0 : date.getMonth()) + 1
                          ]
                        );
                      }}
                      className={textMuted && 'text-muted'}
                      style={{
                        fontSize: (!textMuted && '16px') || '15px',
                        fontWeight: !textMuted && '600',
                        alignContent: 'center',
                        cursor: 'pointer',
                        backgroundColor:
                          new Date().getDate() === day &&
                          date.getDate() === day &&
                          'rgba(207, 207, 207)',
                      }}
                    >
                      {day || ''}
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
