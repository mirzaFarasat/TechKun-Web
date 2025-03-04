"use client";

import { CheckboxGroup, TextArea, TextField } from '@radix-ui/themes';
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
        <div className="bg-primary-700">
        <div className='case-responsive-container px-4 sm:px-8 lg:px-16'>
            <div className='py-36 px-8'>
            <div className='bg-white shadow-xl rounded-lg p-8 sm:p-8 border border-gray-200'>
                <div className="relative flex flex-col justify-center items-center text-center">
                    <h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold my-4'>Contact <span className='text-primary-700'>Our Team</span></h1>
                    <p className='text-gray-700'>Got any questions about scaling the products or growing you on our platform? We&apos;re here to help.</p>
                    <p className='text-gray-700'>Chat to our friendly team 24/7.</p>
                </div>
                <div className='flex flex-col md:flex-row justify-evenly mt-20 gap-10'>
                    <div className='w-full md:w-1/2'>
                        <div className='flex flex-col gap-6 font-semibold'>
                            <div className='space-y-2'>
                                <div className='text-gray-600 text-xs'>Your Name</div>
                                <TextField.Root radius='large' placeholder='Enter Your Name' className='w-full' />
                            </div>
                            <div className='space-y-2'>
                                <div className='text-gray-600 text-xs'>Email</div>
                                <TextField.Root placeholder='Enter Your Email' className='w-full' />
                            </div>
                            <div className='space-y-2'>
                                <div className='text-gray-600 text-xs'>Phone Number</div>
                                <TextField.Root radius='large' placeholder='Enter Your Phone Number' className='w-full' />
                            </div>
                            <div className='space-y-2'>
                                <div className='text-gray-600 text-xs'>Message</div>
                                <TextArea size='2' placeholder='Leave us a message...' className='w-full' />
                            </div>
                            <div className='grid grid-cols-2 text-sm gap-2'>
                                <div className='col-span-2 text-gray-600 text-xs'>Services</div>
                                {['Software services', 'Software development', 'UI & UX design', 'Website design', 'Strategy & consulting', 'Others'].map(service => (
                                    <div className='flex flex-row' key={service}>
                                        <CheckboxGroup.Root className='pt-0.5 pr-2' size="1">
                                            <CheckboxGroup.Item value={service} />
                                        </CheckboxGroup.Root>
                                        <div className='font-medium'>{service}</div>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <button
                                    className="bg-primary-700 text-white py-2 px-4 rounded-lg hover:bg-primary-900 transition-colors w-full"
                                    onClick={handleSubmit}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-1/3'>
                        <div className='flex flex-col gap-6'>
                            <div>
                                <h2 className='mb-1 text-lg'>Chat with us</h2>
                                <p className='text-xs text-gray-700'>Speak to our friendly team by chat.</p>
                                <div className='flex flex-row mt-3'>
                                    <AiOutlineMessage className='mt-1 mr-1' />
                                    <Link href='/' className='text-sm hover:text-gray-700 transition-colors'>Start a live chat</Link>
                                </div>
                                <div className='flex flex-row mt-3'>
                                    <MdOutlineAttachEmail className='mt-1 mr-1' />
                                    <Link href='/' className='text-sm hover:text-gray-700 transition-colors'>Shoot us an email</Link>
                                </div>
                                <div className='flex flex-row mt-3'>
                                    <BsTwitterX className='mt-1 mr-1' />
                                    <Link href='/' className='text-sm hover:text-gray-700 transition-colors'>Message us on X</Link>
                                </div>
                            </div>
                            <div>
                                <h2 className='mb-1 text-lg'>Call us</h2>
                                <p className='text-xs text-gray-500 mb-2'>Call our team Mon-Fri from 8am to 5pm</p>
                                <div className='flex flex-row'>
                                    <TbPhoneCall className='mt-1 mr-1' />
                                    <h3>+91-9111335884</h3>
                                </div>
                            </div>
                            <div>
                                <h2 className='mb-1 text-lg'>Visit us</h2>
                                <p className='text-xs text-gray-500 mb-2'>Visit us at our office in Royal Market</p>
                                <div className='flex flex-row'>
                                    <MdOutlineLocationOn className='mt-1 mr-1' />
                                    <h3>Royal Market, Bhopal, M.P 462001</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
    );
};

export default GetCustomerDetails;