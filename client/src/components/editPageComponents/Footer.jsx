import React from "react";



const Footer = () => {
  return (
    <div className="footer-sections bg-[#F6F7FC] w-full mt-[60px] ">
      <div className="footer-wrapper flex flex-col justify-center items-center">
        <div className="footer-content flex justify-center items-center flex-col">
          <img
            className=" w-[50%] mt-8"
            src="/asset/header/header-merrymatch-logo.svg"
            alt="merry match logo"
          />
          {/* <div className="homepage-footer-logo flex flex-row text-[50px] mb-7 mt-7">
        <h1 className="text-black bg-transparent mr-3">Merry</h1>
        <h1 className="text-[#C70039] bg-transparent font-[800]">
          Match
        </h1>
      </div> */}
          <div className="text text-[#646D89] bg-transparent text-[20px] font-[600] mb-8">
            New generation of online dating website for everyone
          </div>
        </div>
        <div className=" bg-gray-200 w-[300px] p-[1px] mt-5 xl:w-[1100px] sm:w-[700px] "></div>
        <div className="bottom flex justify-center items-center  flex-col mt-[20px]">
          <p className="text-[#9AA1B9] text-[14px]">
            copyright ©2022 merrymatch.com All rights reserved
          </p>
          <div className="flex flex-row mt-[20px] mb-10">
            <svg
              className="mr-[16px]"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="48" height="48" rx="24" fill="#A62D82" />
              <path
                d="M24.0002 16.3608C19.7813 16.3608 16.3613 19.7808 16.3613 23.9997C16.3613 27.8123 19.1549 30.9725 22.807 31.5462V26.2074H20.8667V23.9997H22.807V22.3169C22.807 20.4026 23.9467 19.3454 25.6922 19.3454C26.5279 19.3454 27.4018 19.4943 27.4018 19.4943V21.3735H26.4393C25.4898 21.3735 25.1942 21.9624 25.1942 22.5667V23.9997H27.3124L26.974 26.2074H25.1942V31.5462C28.8456 30.9733 31.6391 27.8115 31.6391 23.9997C31.6391 19.7808 28.2192 16.3608 24.0002 16.3608Z"
                fill="white"
              />
            </svg>
            <svg
              className="mr-[16px]"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="48" height="48" rx="24" fill="#A62D82" />
              <path
                d="M24.0002 16.3608C26.0757 16.3608 26.3347 16.3685 27.149 16.4067C27.9625 16.4449 28.5163 16.5724 29.0037 16.7619C29.5079 16.9559 29.9326 17.2187 30.3573 17.6426C30.7457 18.0245 31.0463 18.4864 31.2381 18.9963C31.4267 19.4829 31.5551 20.0374 31.5933 20.851C31.6292 21.6653 31.6391 21.9242 31.6391 23.9997C31.6391 26.0752 31.6315 26.3342 31.5933 27.1485C31.5551 27.962 31.4267 28.5158 31.2381 29.0032C31.0468 29.5133 30.7462 29.9753 30.3573 30.3568C29.9753 30.7451 29.5134 31.0457 29.0037 31.2376C28.5171 31.4263 27.9625 31.5546 27.149 31.5928C26.3347 31.6287 26.0757 31.6386 24.0002 31.6386C21.9247 31.6386 21.6658 31.631 20.8515 31.5928C20.0379 31.5546 19.4841 31.4263 18.9967 31.2376C18.4867 31.0462 18.0247 30.7456 17.6431 30.3568C17.2546 29.975 16.9541 29.5131 16.7624 29.0032C16.5729 28.5166 16.4454 27.962 16.4072 27.1485C16.3713 26.3342 16.3613 26.0752 16.3613 23.9997C16.3613 21.9242 16.369 21.6653 16.4072 20.851C16.4454 20.0367 16.5729 19.4836 16.7624 18.9963C16.9535 18.4861 17.2542 18.0241 17.6431 17.6426C18.0248 17.254 18.4868 16.9534 18.9967 16.7619C19.4841 16.5724 20.0372 16.4449 20.8515 16.4067C21.6658 16.3708 21.9247 16.3608 24.0002 16.3608ZM24.0002 20.1803C22.9872 20.1803 22.0157 20.5827 21.2995 21.299C20.5832 22.0153 20.1808 22.9867 20.1808 23.9997C20.1808 25.0127 20.5832 25.9842 21.2995 26.7005C22.0157 27.4168 22.9872 27.8192 24.0002 27.8192C25.0132 27.8192 25.9847 27.4168 26.701 26.7005C27.4173 25.9842 27.8197 25.0127 27.8197 23.9997C27.8197 22.9867 27.4173 22.0153 26.701 21.299C25.9847 20.5827 25.0132 20.1803 24.0002 20.1803ZM28.9655 19.9893C28.9655 19.7361 28.8649 19.4932 28.6858 19.3141C28.5068 19.1351 28.2639 19.0345 28.0106 19.0345C27.7574 19.0345 27.5145 19.1351 27.3354 19.3141C27.1564 19.4932 27.0558 19.7361 27.0558 19.9893C27.0558 20.2426 27.1564 20.4854 27.3354 20.6645C27.5145 20.8436 27.7574 20.9442 28.0106 20.9442C28.2639 20.9442 28.5068 20.8436 28.6858 20.6645C28.8649 20.4854 28.9655 20.2426 28.9655 19.9893ZM24.0002 21.7081C24.608 21.7081 25.1909 21.9495 25.6207 22.3793C26.0504 22.809 26.2919 23.3919 26.2919 23.9997C26.2919 24.6075 26.0504 25.1904 25.6207 25.6202C25.1909 26.05 24.608 26.2914 24.0002 26.2914C23.3924 26.2914 22.8095 26.05 22.3798 25.6202C21.95 25.1904 21.7086 24.6075 21.7086 23.9997C21.7086 23.3919 21.95 22.809 22.3798 22.3793C22.8095 21.9495 23.3924 21.7081 24.0002 21.7081Z"
                fill="white"
              />
            </svg>
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="48" height="48" rx="24" fill="#A62D82" />
              <path
                d="M31.7627 19.1539C31.1795 19.4119 30.5611 19.5813 29.9279 19.6566C30.5953 19.2574 31.0949 18.6291 31.3334 17.8889C30.707 18.2617 30.0203 18.5229 29.3045 18.6643C28.8237 18.1498 28.1865 17.8087 27.4918 17.6938C26.7971 17.5789 26.0839 17.6968 25.4631 18.0291C24.8423 18.3613 24.3487 18.8894 24.059 19.5311C23.7693 20.1729 23.6997 20.8924 23.8611 21.5777C22.5908 21.5141 21.3481 21.184 20.2137 20.6089C19.0793 20.0338 18.0785 19.2265 17.2763 18.2395C16.9924 18.7272 16.8432 19.2817 16.844 19.846C16.844 20.9536 17.4077 21.9322 18.2648 22.5051C17.7576 22.4891 17.2615 22.3521 16.818 22.1056V22.1453C16.8182 22.883 17.0734 23.5979 17.5405 24.1689C18.0076 24.7399 18.6578 25.1317 19.3809 25.278C18.91 25.4056 18.4163 25.4244 17.9371 25.333C18.141 25.968 18.5383 26.5233 19.0735 26.9212C19.6086 27.3191 20.2548 27.5397 20.9216 27.5521C20.2589 28.0726 19.5002 28.4573 18.6887 28.6843C17.8772 28.9113 17.0289 28.9762 16.1924 28.8752C17.6527 29.8143 19.3527 30.3129 21.0889 30.3113C26.9655 30.3113 30.1792 25.443 30.1792 21.221C30.1792 21.0835 30.1754 20.9445 30.1693 20.8085C30.7948 20.3564 31.3346 19.7964 31.7635 19.1547L31.7627 19.1539Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
