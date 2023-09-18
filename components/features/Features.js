import Link from "next/link";

import CardContainer from "@/components/features/feature-cards/CardContainer"

function Features({ features }) {
  async function loadStaticData() {}

  return (
    <div>
      {features.map((feature, index) => {
        if (index !== 0) {
          return <CardContainer feature={feature} key={index}/>;
        } else {
          return 
        }
      })}
    </div>
  );
}

export default Features;
