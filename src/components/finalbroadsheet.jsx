import React from 'react'
import resultDetails from '../components/details'

const result = () => {
    return (
        <div className="w-10/12 m-auto border border-lprimary">
            <table className='w-full'>
                <tr className="bg-bprimary text-white">
                        <th className="p-2">S/N</th>
                        <th>Matric Number</th>
                        <th>Names</th>
                        <th>Test Score</th>
                        <th>Exam Score</th>
                        <th>Total</th>
                        <th>Remark</th>
                    </tr>

                    {resultDetails.map(result =>(  
                    <tr result={result} className="w-full text-center odd:bg-white even:bg-taprimary">
                        <td className="p-2">{result.id}</td>
                        <td>{result.matNO}</td>
                        <td>{result.name}</td>
                        <td>{result.testScore}</td>
                        <td>{result.examScore}</td>
                        <td>{result.testScore+result.examScore}</td>
                        <td className='flex'>{(() =>{
                             if((result.testScore+result.examScore) > 70){
                               return(<td className="text-center w-full"> {result.remark = "Excellent"}</td>)
                            }
                            else if((result.testScore+result.examScore) < 70 & (result.testScore+result.examScore) > 60){
                                return(<td className="text-center w-full">{ result.remark= 'Very Good'}</td>)
                            }
                             else if((result.testScore+result.examScore) < 69 & (result.testScore+result.examScore) > 60){
                                return(<td className="text-center w-full">{ result.remark= 'Good'}</td>)
                            }
                             else if((result.testScore+result.examScore) < 60 & (result.testScore+result.examScore) > 40){
                                return(<td className="text-center w-full">{ result.remark= 'Fair'}</td>)
                            }
                             else if((result.testScore+result.examScore) < 39 & (result.testScore+result.examScore) > 10){
                                return(<td className="text-center w-full">{ result.remark= 'Pass'}</td>)
                            }
                             else {
                                return(<td className="text-center w-full">{ result.remark= 'Fail'}</td>)
                            }

                        })()}</td>
                    </tr>
                 ))}
                </table>
                
         </div>

    )
}

export default result;

