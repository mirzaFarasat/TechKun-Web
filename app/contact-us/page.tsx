import { Box, Button, CheckboxGroup, Flex, TextArea, TextField } from '@radix-ui/themes';
import Link from 'next/link';
import React from 'react';
import { AiOutlineMessage } from 'react-icons/ai';
import { BsTwitterX } from 'react-icons/bs';
import { MdOutlineAttachEmail, MdOutlineLocationOn } from 'react-icons/md';
import { TbPhoneCall } from 'react-icons/tb';

const GetCustomerDetails = () => {
    const placeHolders = [
        { lable: 'First Name' },
        { lable: 'Last Name' },
        { lable: 'Email' }
    ]
    return (
        <div className='case-responsive-container'>
            {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
            <div className='py-20'>
                <div className="relative flex flex-col justify-center items-center font-sans">
                    <h1 className='text-5xl font-bold my-4 '>Contact our team</h1>
                    <p className='text-gray-500'>Got any questions about scaling the products or growing you on our platform? We'er here to help.</p>
                    <p className='text-gray-500'>Chat to our friendly team 24/7.</p>
                </div>
                <div className='flex flex-row justify-evenly mt-20'>
                    <div className='basis-1/3'>
                        <div className=' flex flex-col w-96 gap-4 font-semibold'>
                            <div className='flex flex-row gap-14'>
                                <div>
                                    <div className='text-gray-600 text-xs pb-'>First Name</div>
                                    <TextField.Root radius='large' placeholder='First Name' />
                                </div>
                                <div>
                                    <div className='text-gray-600 text-xs'>Last Name</div>
                                    <TextField.Root radius='large' placeholder='Last Name' />
                                </div>
                            </div>
                            <div>
                                <div className='text-gray-600 text-xs'>Email</div>
                                <TextField.Root placeholder='Email' />
                            </div>
                            <div>
                                <div className='text-gray-600 text-xs'>Phone Number</div>
                                <TextField.Root radius='large' placeholder='Phone Number' />
                            </div>
                            <div>
                                <div className='text-gray-600 text-xs'>Message</div>
                                <TextArea size='2' placeholder='Leave us a message...' />
                            </div>
                            <div className='grid grid-cols-2 text-sm gap-2'>
                                <div className='col-span-2 text-gray-600 text-xs'>Services</div>
                                <div className='flex flex-row'>
                                    <CheckboxGroup.Root className='pt-0.5 pr-2' size="1">
                                        <CheckboxGroup.Item value="2" />
                                    </CheckboxGroup.Root>
                                    <h3>Software services</h3>
                                </div>
                                <div className='flex flex-row'>
                                    <CheckboxGroup.Root className='pt-0.5 pr-2' size="1">
                                        <CheckboxGroup.Item value="2" />
                                    </CheckboxGroup.Root>
                                    <h3>Software development</h3>
                                </div>
                                <div className='flex flex-row'>
                                    <CheckboxGroup.Root className='pt-0.5 pr-2' size="1">
                                        <CheckboxGroup.Item value="2" />
                                    </CheckboxGroup.Root>
                                    <h3>UI & UX design</h3>
                                </div>
                                <div className='flex flex-row'>
                                    <CheckboxGroup.Root className='pt-0.5 pr-2' size="1">
                                        <CheckboxGroup.Item value="2" />
                                    </CheckboxGroup.Root>
                                    <h3>Website desigh</h3>
                                </div>
                                <div className='flex flex-row'>
                                    <CheckboxGroup.Root className='pt-0.5 pr-2' size="1">
                                        <CheckboxGroup.Item value="2" />
                                    </CheckboxGroup.Root>
                                    <h3>Stratigy & consulting</h3>
                                </div>
                                <div className='flex flex-row'>
                                    <CheckboxGroup.Root className='pt-0.5 pr-2' size="1">
                                        <CheckboxGroup.Item value="2" />
                                    </CheckboxGroup.Root>
                                    <h3>Others</h3>
                                </div>
                            </div>
                            <div>
                                <button className="bg-zinc-800 text-white py-2 px-4 rounded-lg hover:bg-zinc-700 transition-colors w-96">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='basis-1/4'>
                        <div className='flex flex-col'>
                            <h2 className='font-semibold mb-1'>Chat with us</h2>
                            <p className='text-xs text-gray-500'>Speak to our friendly team by chat.</p>
                            <div className='flex flex-row mt-5 pb-2'>
                                <AiOutlineMessage className='mt-4 mr-1' />
                                <Link href='/' className='pt-3.5 font-semibold text-sm hover:text-gray-500 transition-colors'>Start a live chat</Link>
                            </div>
                            <div className='flex flex-row pb-2'>
                                <MdOutlineAttachEmail className='mt-0.5 mr-1' />
                                <Link href={'/'} className='font-semibold text-sm hover:text-gray-500 transition-colors'>Shoot us an email</Link>
                            </div>
                            <div className='flex flex-row'>
                                <BsTwitterX className='pt-0.5 mr-1' />
                                <Link href={'/'} className='font-semibold text-sm hover:text-gray-500 transition-colors'>Message us on X</Link>
                            </div>
                            <h2 className='mt-9 font-semibold mb-1'>Call us</h2>
                            <p className='text-xs text-gray-500 mb-5'>Call our team Mon-Fri from 8am to 5pm</p>
                            <div className='flex flex-row mb-9'>
                                <TbPhoneCall className='mt-1 mr-1' />
                                <h3 className='font-semibold'>+91911-133-588-4</h3>
                            </div>
                            <h2 className='font-semibold mb-1'>Visit us</h2>
                            <p className='text-xs text-gray-500 mb-5'>Chat to us in personal at our Royal Market HQ</p>
                            <div className='flex flex-row'>
                                <MdOutlineLocationOn className='mt-1 mr-1' />
                                <h3 className='font-semibold'>Black Gate, Bhopal, M.P 462001</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetCustomerDetails;
// import { Button, TextField } from '@radix-ui/themes';
// import React from 'react';

// const GetCustomerDetails = () => {
//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100 blur-sm">
//       <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
//         <h2 className="text-2xl font-semibold text-center mb-6">Connect With Us</h2>
//         <div className="flex flex-col gap-4">
//           <TextField.Root>
//             <TextField.Slot className="mb-1 text-gray-700">Full Name/Company Name</TextField.Slot>
//           </TextField.Root>

//           <TextField.Root>
//             <TextField.Slot className="mb-1 text-gray-700">Email: eg- xyz@gmail.com</TextField.Slot>
//           </TextField.Root>

//           <TextField.Root>
//             <TextField.Slot className="mb-1 text-gray-700">Phone Number</TextField.Slot>
//           </TextField.Root>

//           <Button variant='solid' color='cyan'>Submit</Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// THIS IS THE 2ND ONE-----------------------------------------------------------------------------------
{/* Background with blur effect */ }
{/* <div className="absolute inset-0 blur-sm bg-blue-400 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gray-400 mix-blend-multiply"></div> */}

{/* Form without blur effect */ }
{/* <div className="relative z-10 bg-gray-200 shadow-lg rounded-lg p-6 max-w-md w-full"> */ }
{/* <h1 className="text-2xl font-semibold text-center mb-6">Connect our team</h1>
            <div className="flex flex-col gap-4">
                <TextField.Root>
                <TextField.Slot className="mb-1 text-gray-700">Full Name / Company Name</TextField.Slot>
                </TextField.Root>
    
                <TextField.Root>
                <TextField.Slot className="mb-1 text-gray-700">Email: eg- xyz@gmail.com</TextField.Slot>
                </TextField.Root>
    
                <TextField.Root>
                <TextField.Slot className="mb-1 text-gray-700">Phone Number</TextField.Slot>
                </TextField.Root>
    
                <Button variant='solid' color='cyan' >Submit</Button> */}
{/* </div> */ }
{/* </div> */ }

// -------------------------------------------------------------
{/* <div className='flex flex-col gap-3'>
                <div className='flex flex-row w-56 font-sans gap-2'>
                    <div className='relative flex flex-col'>
                        <div className='text-gray-600 text-xs'>First Name</div>
                        <TextField.Root radius='large' placeholder='First Name'/>
                    </div>
                    <div className='relative flex flex-col'>
                        <div className='text-gray-600 text-xs'>Last Name</div>
                        <TextField.Root radius='large' placeholder='Last Name'/>
                    </div>
                </div>
                <div className='relative flex flex-col'>
                        <div className='text-gray-600 text-xs'>Email</div>
                        <TextField.Root radius='large' placeholder='Email'/>
                </div>
                <div className='relative flex flex-col'>
                        <div className='text-gray-600 text-xs'>Phone Number</div>
                        <TextField.Root radius='large' placeholder='Phone Number'/>
                </div>
                <div className='relative flex flex-col'>
                        <div className='text-gray-600 text-xs'>Message</div>
                        <TextArea size='2' placeholder='Leave us a message...'/>
                </div> */}
// -------------------------------------------------------------------------------
{/* <div className='grid grid-cols-3 gap-2 place-content-start w-1/2 '>
            <div className=''>
                <div className='text-gray-600 text-xs'>First Name</div>
                <TextField.Root radius='large' placeholder='First Name'/>
            </div>
            <div className=''>
                <div className='text-gray-600 text-xs'>Last Name</div>
                <TextField.Root radius='large' placeholder='Last Name'/>
            </div>
            <div className='flex flex-col'>
                
                <h3 className='font-semibold'>Chat with us</h3>
                <p className='text-xs text-gray-400'>Speak to our friendly team by chat.</p>
                <div className='flex flex-row'>
                    <AiOutlineMessage className='mt-4 mr-1'/>
                    <Link href='/' className='pt-4 font-semibold text-sm'>Start a live chat</Link>
                </div>
            </div>
            <div className='col-span-2'>
                <div className='text-gray-600 text-xs'>Email</div>
                <TextField.Root radius='large' placeholder='Email'/>
            </div>
            <div className='flex flex-col pt-2 font-semibold' >
                <div className='flex flex-row'>
                    <MdOutlineAttachEmail className='mr-1' />
                    <Link href={'/'} className='text-sm'>Shoot us an email</Link>
                </div>
                <div className='flex flex-row'>
                    <BsTwitterX className='mt-5 mr-1'/>
                    <Link href={'/'} className='pt-4 text-sm'>Message us on X</Link>
                </div>
            </div>
            <div className='col-span-2'>
                <div className='text-gray-600 text-xs'>Phone Number</div>
                <TextField.Root radius='large' placeholder='Phone Number'/>
            </div>

        </div> */}

// export default GetCustomerDetails;