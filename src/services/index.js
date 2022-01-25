import axios from "axios";

export async function getAssessment_data() {
  try{
    const res = await axios.get(`${process.env.VUE_APP_API_ENDPOINT}questions_and_tasks_assets/Canditech/assessment_data.json`)
    return res
  }catch(error){
    console.log(error);
  }
}