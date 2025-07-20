import './PairCard.css';
import type PairInfo from '../../types/pairInfo.ts';

function PairCard({ time, title, cabinet, teacher, color}: PairInfo) {
  return (
    <div className="pair-card">
      <div className={"colored-bar"}
           style={{backgroundColor: color ?? `hsl(${Math.floor(Math.random() * 360)}, 100%, 75%)`}}></div>
      <div>
        <h2>{time}</h2>
        <h3>{title}</h3>
        <p>{teacher}, кабинет {cabinet}</p>
      </div>
    </div>
  )
}

export default PairCard;