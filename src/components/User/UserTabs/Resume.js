import React from 'react'
import { BuildResume } from '../../../utils/ResumeBuilder';

const Resume = ({user,changeBG,changeTab}) => {
    
    const downloadResume=()=>{
        const resume=document.getElementById('resume');
        BuildResume(resume);
    }
  return (
    <div className="w-[75vw] h-[700px] px-24 rounded-lg my-[18px] pt-5  bg-[#15171a]">
        <div className="flex justify-between mb-10">
            <div className=" text-[#6759C8] text-lg">My resume</div>
            <div className=" float-right">
                <button onClick={downloadResume} className='py-2 px-7 bg-[#6759C8] rounded-full text-white'>Download</button>
            </div>
        </div>
        <div id="resume" className="">
            <div className="w-full aspect-[2/3] bg-white mb-10 px-16 py-16">
                <div className="">
                    <div className="text-[30px] font-bold">{user?.basic_info?.full_name}</div>
                    <div className="text-[20px]">{user?.basic_info?.title}</div>
                    <div className="flex justify-between mt-3">
                        <div className="">{user?.email}</div>
                        <div className="">{user?.basic_info?.mobile_number}</div>
                        <div className="">{user?.basic_info?.state} , {user?.basic_info?.city}</div>
                    </div>
                    <div className="flex justify-between mt-3">
                        <div className="">{user?.social_links?.github_url}</div>
                        <div className="">{user?.social_links?.linked_url}</div>
                    </div>
                </div>
                <div className="">
                    <div className="text-[25px] mt-5 mb-2 font-medium">About me</div>
                    <div className="w-full h-1 bg-black"></div>
                    <div className="mt-2 mb-2">
                        {user?.basic_info?.about}
                    </div>
                </div>
                <div className="">
                    <div className="text-[25px] mt-5 mb-2 font-medium">Education</div>
                    <div className="w-full h-1 bg-black"></div>
                    {user?.education.map(e=>(
                        <div className="" key={e}>
                        <div className="font-medium">{e.institute_name}</div>
                        <div className="">{e.degree} {e.field}     cgpa-{e.cgpa}</div>
                        <div className="text-[10px] italic">2020-2024</div>
                    </div>
                    ))}
                </div>
                <div className="">
                    <div className="text-[25px] mt-5 mb-2 font-medium">Work Experience</div>
                    <div className="w-full h-1 bg-black"></div>
                    {user?.work_experience.map(e =>(
                    <div className="" key={e}>
                            <div className="">{e.job_titile}</div>
                            <div className="text-[14px] font-medium">{e.company_name}</div>
                            <div className="italic text-[10px]">12-1234 to 12-1234</div>
                            <div className="">{e.state}</div>
                            <div className="">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ullam consectetur, expedita quia, repellat perspiciatis rerum quasi ab facilis animi omnis doloremque nesciunt?
                            </div>
                    </div>
                    ))}
                </div>
                <div className="">
                    <div className="text-[25px] mt-5 mb-2 font-medium">Projects</div>
                    <div className="w-full h-1 bg-black"></div>
                    {user?.projects.map(e=>(
                        <div className="" key={e}>
                            <div className="">{e.project_title}</div>
                            <div className="text-[14px]">{e.project_url}</div>
                            <div className="font-medium">{e.project_description}</div>
                            <div className="">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae minus voluptatibus ratione tempore molestiae illum esse repudiandae eius atque, praesentium fuga dolorum nostrum suscipit incidunt laudantium quaerat necessitatibus, dignissimos voluptatem.
                            </div>
                        </div>
                    ))}
                </div>
                <div className="">
                    <div className="text-[25px] mt-5 mb-2 font-medium">Skills</div>
                    <div className="w-full h-1 bg-black"></div>
                    <div className="flex flex-wrap mt-5">
                        {user?.skills.map(e=>(
                            <div key={e} className="px-5 py-2 bg-slate-300 rounded-full mr-3 mb-3">{e}</div>
                        ))}
                    </div>
                </div>
                <div className="">
                    <div className="text-[25px] mt-5 mb-2 font-medium">Achivements</div>
                    <div className="w-full h-1 bg-black"></div>
                    <div className="">{user?.achievements}</div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Resume