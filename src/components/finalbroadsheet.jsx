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
                               return(<td className="text-center w-full"> {result.remark = "A"}</td>)
                            }
                            else if((result.testScore+result.examScore) < 70 & (result.testScore+result.examScore) > 60){
                                return(<td className="text-center w-full">{ result.remark= 'B'}</td>)
                            }
                             else if((result.testScore+result.examScore) < 60 & (result.testScore+result.examScore) > 50){
                                return(<td className="text-center w-full">{ result.remark= 'C'}</td>)
                            }
                             else if((result.testScore+result.examScore) < 50 & (result.testScore+result.examScore) > 44){
                                return(<td className="text-center w-full">{ result.remark= 'D'}</td>)
                            }
                             else if((result.testScore+result.examScore) < 45 & (result.testScore+result.examScore) > 40){
                                return(<td className="text-center w-full">{ result.remark= 'E'}</td>)
                            }
                             else {
                                return(<td className="text-center w-full">{ result.remark= 'F'}</td>)
                            }

                        })()}</td>
                    </tr>
                 ))}
                </table>
                
         </div>

    )
}

export default result;

