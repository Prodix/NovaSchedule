import type PairInfo from "../types/pairInfo.ts";
import PairCard from "../components/PairCard/PairCard.tsx";

function Schedule({ schedule }: { schedule: PairInfo[] }) {
  return (
    <ul>
      {schedule.map((item: PairInfo, index: number) => (
        <li key={index}>
          <PairCard {...item} />
        </li>
      ))}
    </ul>
  )
}

export default Schedule;