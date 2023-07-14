import Accordion from "react-bootstrap/Accordion";
import Daily from "./Daily";
import { useRef } from "react";

const ResultContent4 = ({ fifthteenDays }) => {
  const dailyRef = useRef(null);

  const handleLeft = () => {
    dailyRef.current.scrollLeft -= 250;
  };

  const handleRight = () => {
    dailyRef.current.scrollLeft += 250;
  };

  return (
    <div className="result-current-4 result-current-box">
      <div className="result-current-4-head">Daily</div>
      <div className="result-current-4-body">
        <Accordion
          className="result-current-4-accordion"
          defaultActiveKey="0"
          flush
        >
          {fifthteenDays.map((item, index) => (
            <Daily key={index} index={index} data={item} />
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default ResultContent4;
