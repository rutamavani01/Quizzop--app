import React from 'react'
import themeColors from '../utils/colors'

const Header = () => {
    return (
        
        // <div className="container p-0  text-center  text-light rounded" style={{ maxWidth: '492px', border: '4px solid #3336708a', height: '100vh' }}>
        //     <div className='d-flex justify-content-between'>
                <div>
                    <header className='p-1  d-flex justify-content-center align-items-center ' style={{backgroundColor:themeColors.SecondbgColor}}>
                        <svg width="102" height="51" viewBox="0 0 72 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.0236 2.1C21.0236 0.93912 20.0818 0 18.9213 0H10.5118H2.10236C0.941858 0 0 0.93912 0 2.1V18.9C0 20.0609 0.941858 21 2.10236 21H10.5118H18.9213C20.0818 21 21.0236 20.0609 21.0236 18.9V2.1Z" fill="#FEDE34" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9976 11.061L12.9909 11.1265C12.9304 11.6406 12.8093 12.1244 12.6293 12.5763L12.599 12.6486L12.7739 12.7897L13.7343 11.1718H13.4248C13.2718 11.1735 13.1271 11.1332 12.9976 11.061ZM7.46253 4.46191C9.02165 4.46191 10.3587 4.98271 11.3292 5.96719C11.7497 6.39391 12.0844 6.89119 12.3282 7.44559C12.4409 7.64551 12.5418 7.85551 12.6293 8.07391C12.7857 7.78663 13.0885 7.58671 13.4282 7.58671H17.9626C18.3107 7.58671 18.6185 7.76143 18.7884 8.05543C18.9549 8.35111 18.9515 8.71231 18.78 9.00463L17.3672 11.4222H17.9323C18.4486 11.4222 18.8523 11.822 18.8523 12.331V14.0581C18.8523 14.547 18.4587 14.9468 17.9693 14.9653H17.9323H13.1524C13.0716 14.967 12.9909 14.9569 12.9152 14.9384L11.5377 16.3026L11.4957 16.3345C11.2855 16.4924 11.082 16.5327 10.9407 16.5361H10.9155C10.759 16.5361 10.4597 16.4924 10.204 16.1934L10.1922 16.1782L9.58508 15.4323C9.03342 15.6138 8.43803 15.7095 7.81237 15.7213H7.69464C6.13721 15.7213 4.80011 15.2022 3.82966 14.2194C3.40582 13.791 3.06943 13.292 2.82388 12.7342C2.36136 11.9144 2.12085 10.945 2.12085 9.8732C2.12085 8.29736 2.63214 6.94327 3.60091 5.96215C4.56632 4.98271 5.90342 4.46191 7.46253 4.46191Z" fill="#8848ED" />
                            <path d="M7.46249 5.22168C10.2141 5.22168 12.049 7.07976 12.049 9.88032C12.049 10.9253 11.79 11.8426 11.3123 12.5902L12.3719 13.4419C12.488 13.5326 12.488 13.6234 12.3972 13.7006L10.8078 15.2748C10.7052 15.3521 10.6261 15.3386 10.5488 15.2496L9.59345 14.0753C8.97283 14.3592 8.24962 14.5138 7.46249 14.5138C4.71092 14.5138 2.87598 12.6557 2.87598 9.88032C2.87598 7.07976 4.71092 5.22168 7.46249 5.22168ZM17.8398 8.04408C17.9205 8.04408 17.9962 8.08776 18.0365 8.15832C18.0769 8.22888 18.0769 8.31456 18.0365 8.38512L16.2453 11.515C16.205 11.5855 16.205 11.6712 16.2453 11.7418C16.2857 11.8123 16.3614 11.856 16.4421 11.856H17.754C17.8801 11.856 17.9827 11.9585 17.9827 12.0845V13.7191C17.9827 13.8451 17.8801 13.9476 17.754 13.9476H13.1389C13.0581 13.9476 12.9825 13.9039 12.9421 13.835C12.9017 13.7645 12.9 13.6788 12.9404 13.6082L14.6728 10.5439C14.7131 10.4734 14.7114 10.3877 14.6711 10.3171C14.6307 10.2466 14.555 10.2046 14.4743 10.2046H13.3928C13.2667 10.2046 13.1658 10.1038 13.1641 9.97776L13.1591 8.27424C13.1591 8.21376 13.1826 8.15496 13.2263 8.11296C13.2684 8.07096 13.3272 8.04576 13.3878 8.04576H17.8398V8.04408ZM7.46249 7.75176C6.35076 7.75176 5.61578 8.60352 5.61578 9.88032C5.61578 11.1571 6.35245 12.0089 7.46249 12.0089C7.59704 12.0089 7.7316 11.9971 7.86278 11.9702L7.47595 11.4931C7.39858 11.4024 7.39858 11.3251 7.4894 11.2344L8.32867 10.4078C8.41949 10.3171 8.4834 10.2919 8.57422 10.3692L9.1427 10.8346C9.25875 10.5506 9.31089 10.2281 9.31089 9.88032C9.31089 8.60352 8.57422 7.75176 7.46249 7.75176ZM8.14197 9.49056C8.17729 9.51744 8.19916 9.55944 8.20085 9.60312C8.20253 9.6468 8.1857 9.69048 8.15375 9.72072L6.9226 10.8984C6.89065 10.9286 6.84692 10.9438 6.80151 10.9404C6.7561 10.937 6.71741 10.9135 6.69219 10.8766C6.38104 10.4414 6.40459 9.86016 6.77124 9.50904C7.13789 9.15792 7.7215 9.16128 8.14197 9.49056Z" fill="white" />
                            <path d="M33.89 13.4014C34.0497 13.5879 34.0363 13.7559 33.8429 13.9155L32.6857 14.8714C32.499 15.0259 32.3174 14.9991 32.1711 14.8243L31.495 14.0465C30.8592 14.3371 30.1478 14.4967 29.3943 14.4967C26.6528 14.4967 24.4529 12.3665 24.4529 9.59115C24.4529 6.81579 26.6528 4.68555 29.3943 4.68555C32.1358 4.68555 34.3357 6.81579 34.3357 9.59115C34.3357 10.7755 33.9354 11.8423 33.2626 12.6773L33.89 13.4014ZM29.3943 12.1498C29.5389 12.1498 29.6785 12.1397 29.8147 12.1179L29.184 11.3921C29.0226 11.2056 29.036 11.0376 29.2311 10.878L30.395 9.92211C30.5817 9.76755 30.7633 9.79443 30.9096 9.96915L31.6497 10.8209C31.8313 10.4647 31.9322 10.0481 31.9322 9.59115C31.9322 8.08755 30.834 7.03419 29.3943 7.03419C27.9546 7.03419 26.8563 8.08755 26.8563 9.59115C26.8563 11.0947 27.9546 12.1498 29.3943 12.1498Z" fill="white" />
                            <path d="M40.6866 7.57688C40.9204 7.57688 41.0549 7.70959 41.0549 7.94479V13.9306C41.0549 14.1642 40.9221 14.2986 40.6866 14.2986H39.1847C38.9509 14.2986 38.8163 14.1658 38.8163 13.9306V13.7341C38.48 14.181 37.9283 14.485 37.1614 14.485C35.91 14.485 35.0085 13.5291 35.0085 11.8491V7.94312C35.0085 7.7096 35.1414 7.5752 35.3769 7.5752H36.8788C37.1126 7.5752 37.2471 7.70792 37.2471 7.94312V11.5988C37.2471 12.1146 37.5431 12.3783 37.9922 12.3783C38.5355 12.3783 38.818 12.0423 38.818 11.4375V7.94312C38.818 7.7096 38.9509 7.5752 39.1864 7.5752L40.6866 7.57688Z" fill="white" />
                            <path d="M41.7932 6.46619V5.25659C41.7932 5.02307 41.9261 4.88867 42.1615 4.88867H43.6635C43.8973 4.88867 44.0318 5.02139 44.0318 5.25659V6.46619C44.0318 6.69971 43.8989 6.83411 43.6635 6.83411H42.1615C41.9278 6.83243 41.7932 6.69971 41.7932 6.46619ZM41.7932 13.9304V7.94459C41.7932 7.71107 41.9261 7.57667 42.1615 7.57667H43.6635C43.8973 7.57667 44.0318 7.70939 44.0318 7.94459V13.9304C44.0318 14.164 43.8989 14.2984 43.6635 14.2984H42.1615C41.9278 14.2967 41.7932 14.164 41.7932 13.9304Z" fill="white" />
                            <path d="M49.8173 12.2274C50.0511 12.2274 50.1857 12.3601 50.1857 12.5953V13.9309C50.1857 14.1644 50.0528 14.2988 49.8173 14.2988H45.0458C44.812 14.2988 44.6775 14.1661 44.6775 13.9309V13.0203C44.6775 12.8406 44.7246 12.7062 44.8305 12.5667L47.0624 9.64859H45.1787C44.9449 9.64859 44.8104 9.51587 44.8104 9.28067V7.94507C44.8104 7.71155 44.9432 7.57715 45.1787 7.57715H49.6811C49.9149 7.57715 50.0494 7.70987 50.0494 7.94507V8.85563C50.0494 9.03539 50.0023 9.16979 49.8964 9.30923L47.6645 12.2274H49.8173Z" fill="white" />
                            <path d="M55.9394 12.2274C56.1732 12.2274 56.3078 12.3601 56.3078 12.5953V13.9309C56.3078 14.1644 56.1749 14.2988 55.9394 14.2988H51.1679C50.9341 14.2988 50.7996 14.1661 50.7996 13.9309V13.0203C50.7996 12.8406 50.8467 12.7062 50.9526 12.5667L53.1845 9.64859H51.3008C51.067 9.64859 50.9324 9.51587 50.9324 9.28067V7.94507C50.9324 7.71155 51.0653 7.57715 51.3008 7.57715H55.8032C56.037 7.57715 56.1715 7.70987 56.1715 7.94507V8.85563C56.1715 9.03539 56.1244 9.16979 56.0185 9.30923L53.7866 12.2274H55.9394Z" fill="white" />
                            <path d="M56.6443 10.9368C56.6443 8.92755 58.2387 7.38867 60.2351 7.38867C62.2315 7.38867 63.826 8.92755 63.826 10.9368C63.826 12.9461 62.2315 14.485 60.2351 14.485C58.2505 14.485 56.6443 12.9461 56.6443 10.9368ZM61.5874 10.9368C61.5874 10.1019 61.0088 9.53907 60.2351 9.53907C59.4614 9.53907 58.8829 10.1019 58.8829 10.9368C58.8829 11.7718 59.4614 12.3346 60.2351 12.3346C61.0088 12.3346 61.5874 11.7718 61.5874 10.9368Z" fill="white" />
                            <path d="M68.5521 7.38867C70.3467 7.38867 71.7679 8.92251 71.7679 10.9368C71.7679 12.9528 70.3467 14.485 68.5521 14.485C67.7414 14.485 67.1376 14.233 66.7037 13.8012V16.6186C66.7037 16.8521 66.5708 16.9865 66.3353 16.9865H64.8334C64.5996 16.9865 64.4651 16.8538 64.4651 16.6186V7.94475C64.4651 7.71123 64.598 7.57683 64.8334 7.57683H66.3353C66.5691 7.57683 66.7037 7.70955 66.7037 7.94475V8.07411C67.1359 7.64067 67.7414 7.38867 68.5521 7.38867ZM69.5293 10.9368C69.5293 10.0666 68.9507 9.49875 68.1165 9.49875C67.2822 9.49875 66.7037 10.0683 66.7037 10.9368C66.7037 11.8054 67.2822 12.3749 68.1165 12.3749C68.9507 12.3749 69.5293 11.8071 69.5293 10.9368Z" fill="white" />
                        </svg>

                    </header>
                {/* </div>
            </div> */}
        </div>
    )
}

export default Header