import React from 'react'
import { Language } from '../../../components/UniversalComponents/languageAndContact/Language'
import { TopArea } from '../../../components/UniversalComponents/toparea/TopArea'
import { CampusLife } from "../../../components/AboutComponents/CampusLife/CampusLife";
import Tableandrules from '@/components/AdmissionComp0nents/Tableandrules/Tableandrules';
import { Register } from "../../../components/UniversalComponents/register/Register";
import { Footer } from "../../../components/UniversalComponents/footer/Footer";
const page = () => {
  return (
    <div>
         <Language />
      <TopArea pagename="Scholarship" moredet="Home   /   Admissions" />
      <CampusLife h1={"Meritorious Scholarships"} p1={"Bhawani Shanker Anangpuria Charitable Trust is a keen believer in recognizing the potentials of the students, therefore in the inceptive year of BSAEI i.e. 2001, the three scholarships itself were introduced in the memory of ‘Lala Bhawani Prasad Anangpuria’, Lala Shanker Lal Anangpuria’ & ‘Jannayak Chaudhary Devi Lal’"} p2={"In the year 2016-17, one more scholarship was introduced in the memory of ‘ Seth Shri Om Prakash Gupta’ the founder Chairman of our Trust and its allied Institutes. All the four scholarships are meritorious scholarships and are being awarded to the Anangpuria’s students who perform exceptionally well in the University Examinations. "}/>
      <Tableandrules/>
<Register/>
<Footer/>
    </div>
  )
}

export default page