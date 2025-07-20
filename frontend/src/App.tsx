import Schedule from "./features/Schedule.tsx";
import type PairInfo from "./types/pairInfo.ts";

function App() {

  const lastNames: string[] = ['Иванов С. М.', 'Шилов Н. В.', 'Добрин Ю. Н.'];
  const timeArray: string[] = ['8:30-10:10', '10:20-12:00', '12:45-14:25'];
  const titleArray: string[] = ['Информатика', 'Математика', 'Русский язык'];
  const cabinetArray: string[] = ['1017', '1018', '1017Ф'];

  const schedule: PairInfo[] = [...Array(Math.floor(Math.random() * 6)).keys()].map(() => (
    {
      teacher: lastNames[Math.floor(Math.random() * 2)],
      time: timeArray[Math.floor(Math.random() * 2)],
      title: titleArray[Math.floor(Math.random() * 2)],
      cabinet: cabinetArray[Math.floor(Math.random() * 2)]
    }
  ));

  return (
    <>
      <Schedule schedule={schedule} />
    </>
  )
}

export default App;
