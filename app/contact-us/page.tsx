"use client";

import { CheckboxGroup, TextArea, TextField } from '@radix-ui/themes';
// import { ClientPageRoot } from 'next/dist/client/components/client-page';
import Link from 'next/link';
import React from 'react';
import { AiOutlineMessage } from 'react-icons/ai';
import { BsTwitterX } from 'react-icons/bs';
import { MdOutlineAttachEmail, MdOutlineLocationOn } from 'react-icons/md';
import { TbPhoneCall } from 'react-icons/tb';

const GetCustomerDetails = () => {
    const handleSubmit = () => {
        const formData = {
            name: (document.querySelector('input[placeholder="Your Name"]') as HTMLTextAreaElement).value,
            email: (document.querySelector('input[placeholder="Email"]') as HTMLTextAreaElement).value,
            phone: (document.querySelector('input[placeholder="Phone Number"]') as HTMLTextAreaElement).value,
            message: (document.querySelector('textarea[placeholder="Leave us a message..."]') as HTMLTextAreaElement).value,
            services: Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => (checkbox.nextSibling as HTMLElement).textContent)
        };

        console.log(formData);

        // Send the formData to the index file or server
        fetch('/api/contact-us', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
    
        .then(data => {
            console.log('Success:', data);
            alert('Form submitted successfully!');
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Form submission failed!');
        });
    }
   

    return (
        <div className='case-responsive-container'>
            {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
            <div className='py-20'>
                <div className="relative flex flex-col justify-center items-center font-sans">
                    <h1 className='text-5xl font-bold my-4 '>Contact <span className='text-primary-700'>our team</span></h1>
                    <p className='text-gray-500'>Got any questions about scaling the products or growing you on our platform? We&apos;re here to help.</p>
                    <p className='text-gray-500'>Chat to our friendly team 24/7.</p>
                </div>
                <div className='flex flex-row justify-evenly mt-20'>
                    <div className='basis-1/3'>
                        <div className=' flex flex-col w-96 gap-4 font-semibold'>
                            <div className='flex flex-row gap-14'>
                                <div>
                                    <div className='text-gray-600 text-xs'>Your Name</div>
                                    <TextField.Root radius='large' placeholder='Your Name' />
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
                                    <h3>Website design</h3>
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
                                <button 
                                    className="bg-primary-700 text-white py-2 px-4 rounded-lg hover:bg-zinc-700 transition-colors w-96"
                                    onClick={handleSubmit}
                                >
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
                                <h3 className='font-semibold'>+91-9111335884</h3>
                            </div>
                            <h2 className='font-semibold mb-1'>Visit us</h2>
                            <p className='text-xs text-gray-500 mb-5'>Visit us at our office in royal market</p>
                            <div className='flex flex-row'>
                                <MdOutlineLocationOn className='mt-1 mr-1' />
                                <h3 className='font-semibold'>Royal Market, Bhopal, M.P 462001</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default GetCustomerDetails;