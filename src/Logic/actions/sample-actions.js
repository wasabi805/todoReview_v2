import { TIM_SAMPLE_ACTION } from "../_types/types";

export const timSampleAction = () => {
  return {
    type: TIM_SAMPLE_ACTION,
    payload: "This my stuff : Gets added to ...state"
  };
};
