import Link from "next/link";

import CardContainer from "@/components/features/feature-cards/CardContainer";
import CardContent from "./feature-cards/CardContent";

function Features({ features }) {
  return (
    <div className="pb-20">
      <CardContent first feature={features[0]} />
      <div className="md:flex">
        {features.map((feature, index) => {
          const isLastItem = index === features.length - 1 ? true : false;

          if (index !== 0) {
            return (
              <CardContainer
                feature={feature}
                key={index}
                isLastItem={isLastItem}
                index={index}
              />
            );
          } 
          // else {
          //   return <CardContent first feature={feature} key={index} />;
          // }
        })}
      </div>
    </div>
  );
}

export default Features;
