import { Counter } from "./counter";
import { ArrayAsStates } from "./ArrayAsStates";
import { NameComp } from "./NameComp";
import { RefTypesStates } from "./reftypesStates";
import { UpdateData } from "./UpdateBasedOnPrevState";
export const Appv2 = () => {
  return (
    <div>
      <Counter />
      <ArrayAsStates />
      <NameComp name="Sanjay" />
      <RefTypesStates />
      <UpdateData />
    </div>
  );
};
