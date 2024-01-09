import React from 'react'
import Image from 'next/image'
import point from "../../../Assets/svg/point.svg";
import "./index.scss"

const Tableandrules = () => {
    const rules=["The above Scholarships are for Undergraduate courses only.",
    "The time of award of Scholarships shall be the University examination system of the respective courses i.e. semester or year.",
"In case of a tie between the students, all eligible students shall be awarded scholarship.",
"At any stage before awarding the scholarship if it is found that the eligible student has indulged in any nefarious activity then his/her scholarship shall stand canceled and the said scholarship will be awarded to next eligible student.",
"Besides the specified necessary academics achievements, 75% of attendance in a semester/ year is mandatory for the award of scholarship.",
"Grant of the scholarship shall be for an academic semester/year only and it cannot be claimed for the subsequent years of the course."]
    return (
        <div>
            <div className='table'>
                <table>
                    <thead>
                        <tr>
                            <th>Amount</th>
                            <th>Name of the Scholarship</th>
                            <th>Year of Establishment</th>
                            <th>Award of honor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Rs.1,00,000/-</td>
                            <td>Seth Om Prakash Gupta</td>
                            <td>2016-17</td>
                            <td>To be given to the students of BSAEI who will be awarded Gold Medal by the University</td>
                        </tr>
                        <tr>
                            <td>
                                Rs.50,000/-
                            </td>
                            <td>
                                Lala Bhawani Prasad Anangpuria
                            </td>
                            <td>
                                2001-02
                            </td>
                            <td>
                                To be given to the 1st rank holder of our Institutes out of top 03 meritorious students in the University merit list of each course
                            </td>
                        </tr>
                        <tr>
                            <td>Rs.35,000/-</td>
                            <td>Lala Shanker Lal Anangpuria</td>
                            <td>2001-02</td>
                            <td>To be given to the 2nd  rank holder of our Institutes out of top 03 meritorious students in the University merit list of each course</td>
                        </tr>

                        <tr>
                            <td>Rs.25,000/-</td>
                            <td>Jannayak Chaudhary Devi Lal</td>
                            <td>2001-02</td>
                            <td>To be given to the 3rd rank holder of our Institutes out of top 03 meritorious students in the University merit list of each course</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='rulesandregulations'>
                <p>Rules and Regulations</p>
                <div className='rules'  >
                {rules.map((r,index)=>{
                    return <div className='each-rules' key={index}>
                    <Image src={point} alt='img' unoptimized />
                    <p>{r}</p>
                     
                </div>
                  })}
                  </div>
            </div>
        </div>
    )
}

export default Tableandrules