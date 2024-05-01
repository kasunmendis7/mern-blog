import { Footer, FooterLink } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter, BsTwitterX } from 'react-icons/bs';

export default function FooterCom() {
    return (
        <Footer container className='border border-t-8 border-cyan-500'>
            <div className='w-full max-w-7xl mx-auto'>
                <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                    <div className='mt-5'>
                        <Link to="/" className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
                            <span className='px-2 py-1 bg-gradient-to-r from-cyan-500 via-cyan-500 to-cyan-300 rounded-lg text-white'>
                                Mendis'
                            </span>
                            Blog
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title title='About' />
                            <Footer.LinkGroup col>
                                <FooterLink href='https://www.100jsprojects.com' target='_blank' rel='noopener noreferrer'>
                                    100 JS Projects
                                </FooterLink>
                                <FooterLink href='/about' target='_blank' rel='noopener noreferrer'>
                                    Mendis' Blog
                                </FooterLink>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title='Follow Us' />
                            <Footer.LinkGroup col>
                                <FooterLink href='https://github.com/' target='_blank' rel='noopener noreferrer'>
                                    GitHub
                                </FooterLink>
                                <FooterLink href='https://discord.com/channels/@me' target='_blank' rel='noopener noreferrer'>
                                    Discord
                                </FooterLink>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title='Legal' />
                            <Footer.LinkGroup col>
                                <FooterLink href='#'>
                                    Privacy Policy
                                </FooterLink>
                                <FooterLink href='#'>
                                    Terms & Conditions
                                </FooterLink>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className='w-full sm:flex sm:items-center sm:justify-between'>
                    <Footer.Copyright href='#' by="Kasun Mendis" year={new Date().getFullYear()} />
                    <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                        <Footer.Icon href='#' icon={BsFacebook} />
                        <Footer.Icon href='#' icon={BsInstagram} />
                        <Footer.Icon href='#' icon={BsTwitter} />
                        <Footer.Icon href='#' icon={BsTwitterX} />
                        <Footer.Icon href='https://github.com/' icon={BsGithub} /> 
                    </div>
                </div>
            </div>
        </Footer>
    )
}
