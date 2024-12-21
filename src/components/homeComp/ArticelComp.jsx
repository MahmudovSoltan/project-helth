import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import { RiLeafLine } from "react-icons/ri";
import { useSelector } from "react-redux";

const ArticelComp = () => {
  const { blogs } = useSelector((state) => state.blog);
  let [count, setCount] = useState(4);
  const [less, setLess] = useState(true);
  const blog = blogs.slice(0, count);
  const moreCard = () => {
    if ( count<24 ) {
      setCount((count += 4)); 
    }
   else if (count === 24) {
      setLess(false)
    }
  };
  const lessBtn = () => {
    setCount((count = 4));
    setLess(true);
  };
  console.log(count);
  console.log(blogs.length);
  
  
  return (
    <div className="container">
      <h2 className="flex flex-col items-center justify-center text-[40px] text-[#3d3c3c] my-[80px] font-semibold ">
        Popular Articles
        <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="188"
                height="10"
                viewBox="0 0 188 10"
                fill="none"
              >
                <g clip-path="url(#clip0_1252_47)">
                  <path
                    d="M187.911 1.43505C186.911 3.12505 185.241 3.25505 183.691 3.30505C180.141 3.41505 176.581 3.47506 173.031 3.40506C169.031 3.32506 165.031 4.15506 161.031 3.78506C158.831 3.57506 156.761 4.43505 154.661 4.46505C152.021 4.46505 149.451 5.02504 146.831 5.07504C146.221 5.07504 145.631 5.85504 145.281 5.54504C144.231 4.62504 143.511 5.93504 142.701 5.79504C141.631 5.74847 140.56 5.87683 139.531 6.17504C137.771 6.37504 135.961 6.17506 134.231 6.81506C133.781 6.98506 133.371 5.62504 132.731 6.63504C130.021 7.03504 127.261 5.84504 124.561 6.88504C124.831 7.88504 124.011 7.88505 123.651 7.71505C122.951 7.34505 122.481 7.78505 121.911 7.93505C122.071 8.37505 122.541 8.03504 122.771 8.38504C121.951 9.38504 121.021 8.32505 120.201 8.64505C120.111 8.09505 120.421 8.20503 120.621 8.16503C120.821 8.12503 121.291 8.27505 121.221 7.80505C121.151 7.33505 120.751 7.42504 120.531 7.54504C119.771 7.96504 118.871 7.42503 118.111 7.91503C118.551 8.71503 119.261 7.71504 119.671 8.32504C119.131 9.44504 118.211 8.75505 117.541 8.58505C116.871 8.41505 115.701 9.58504 115.201 8.04504C115.151 7.89504 113.901 7.50506 114.041 8.97506C113.921 7.14506 112.611 7.97506 111.891 7.65506C111.731 7.57506 111.511 7.70504 111.491 7.95504C111.471 8.20504 111.691 8.24506 111.871 8.28506C112.311 8.37506 112.801 8.17506 113.431 8.62506C111.431 8.95506 109.621 8.35506 107.841 8.56506C107.041 8.70942 106.217 8.56779 105.511 8.16503C104.861 7.75503 104.361 7.63506 104.211 8.65506C104.202 8.74204 104.174 8.82611 104.13 8.90191C104.087 8.97772 104.028 9.04359 103.957 9.09533C103.887 9.14707 103.806 9.18356 103.721 9.20245C103.635 9.22134 103.547 9.22222 103.461 9.20504C103.151 8.65504 104.381 7.45505 102.731 7.43505C101.281 7.43505 101.921 8.43506 101.851 9.31506C100.851 7.79506 99.3709 8.48505 98.2109 8.39505C97.0509 8.30505 95.8009 8.76506 94.7809 7.65506C94.7075 7.58981 94.6174 7.54626 94.5207 7.52926C94.4239 7.51226 94.3243 7.52247 94.2331 7.55877C94.1418 7.59508 94.0624 7.65603 94.0038 7.73483C93.9451 7.81363 93.9095 7.90721 93.9009 8.00506C93.7609 8.77506 93.1009 8.92505 92.6809 8.58505C92.4545 8.36927 92.1681 8.22706 91.8593 8.17709C91.5505 8.12712 91.2339 8.17172 90.951 8.30505C90.441 8.46505 89.511 8.83506 88.951 7.72506C88.801 7.42506 87.251 7.77505 86.381 7.99505C85.4044 8.29828 84.3487 8.21596 83.4309 7.76504C82.9609 7.53504 82.231 6.71505 81.891 7.99505C81.891 8.09505 81.581 8.21503 81.551 8.19503C80.661 7.19503 79.551 7.98505 78.551 7.86505C76.1358 7.61328 73.7092 7.48644 71.2809 7.48504C69.3309 7.48504 67.2809 7.76505 65.4609 6.61505C65.2909 6.50505 64.9909 6.39505 64.9609 6.55505C64.6209 8.18505 63.391 7.30504 62.761 7.20504C61.421 7.00504 59.931 7.95505 58.761 6.71505C58.6998 6.6809 58.631 6.66296 58.5609 6.66296C58.4909 6.66296 58.4221 6.6809 58.361 6.71505C57.001 7.55505 55.481 7.22504 54.081 7.10504C52.341 6.96504 50.611 7.10504 48.881 7.04504C48.0778 7.0892 47.2736 6.98064 46.511 6.72506C46.4717 6.65113 46.4382 6.57422 46.4109 6.49505L46.2809 6.62506L46.5009 6.73504C44.9809 6.48504 43.5009 6.93504 41.9009 6.51504C40.205 6.17838 38.4654 6.12097 36.7509 6.34506C33.8109 6.53506 30.8909 6.41506 27.9609 6.34506C24.4109 6.23506 20.8509 5.73506 17.3109 5.84506C13.5909 5.97506 9.88095 5.84505 6.16095 6.08505C4.01879 6.19611 1.88397 5.75538 -0.0390625 4.80505C0.21645 4.47966 0.545402 4.2194 0.920837 4.04559C1.29627 3.87178 1.70752 3.78935 2.12094 3.80505C6.34094 3.63505 10.5709 3.52504 14.7809 3.13504C18.0657 2.8901 21.3634 2.87006 24.6509 3.07504C28.6509 3.24504 32.5609 2.78505 36.5309 2.96505C40.5009 3.14505 44.211 2.96504 48.041 3.20504C50.041 3.32504 51.961 2.95505 53.891 3.08505C54.891 3.16505 55.991 3.28506 57.041 3.37506C57.9143 3.46454 58.7927 3.26424 59.541 2.80505C57.791 2.64505 56.3209 2.53504 54.881 2.42504C50.351 2.07504 45.8109 2.05506 41.2809 1.78506C38.9309 1.63506 36.5909 1.58506 34.2809 1.65506C32.6209 1.70506 30.9809 2.02505 29.3409 2.11505C27.7009 2.20505 25.8909 1.95505 24.1609 1.89505C19.3312 1.5951 14.4866 1.62516 9.66095 1.98504C6.73462 2.11806 3.80303 2.08135 0.880951 1.87506C0.880951 1.71506 1.10096 1.76505 1.11096 1.71505C1.37096 0.185053 2.50097 0.925046 3.24097 0.895046C6.87097 0.735046 10.501 0.48504 14.131 0.29504C15.491 0.22504 16.9709 0.515054 18.2809 0.435054C21.1109 0.265054 23.9109 0.495054 26.7209 0.435054C30.7209 0.305054 34.7209 0.485054 38.7209 0.435054C40.7209 0.435054 42.6409 -0.0649556 44.6209 0.175044C45.4239 0.414707 46.2475 0.578745 47.081 0.665035C47.9648 0.577374 48.8531 0.544003 49.741 0.565059C50.5307 0.47094 51.3262 0.685918 51.9609 1.16503C52.0951 1.29635 52.2579 1.39494 52.4364 1.45309C52.6149 1.51124 52.8045 1.5274 52.9903 1.5003C53.1761 1.47321 53.3531 1.40358 53.5076 1.29687C53.6621 1.19016 53.7898 1.04921 53.881 0.885036C54.3559 0.718555 54.8667 0.68176 55.3607 0.778438C55.8546 0.875116 56.3138 1.10179 56.6909 1.43505C56.9209 1.65505 57.3509 1.72505 57.4409 1.49505C57.8909 0.425052 58.4409 1.06505 59.0009 1.30505L58.771 1.40506L58.891 1.54504L59.0009 1.31506C60.8106 1.33443 62.6173 1.46466 64.4109 1.70504C66.961 1.82504 69.5409 1.60504 72.0609 1.95504C75.3909 2.41504 78.7409 2.21506 82.0609 2.50506C83.7209 2.65506 85.4809 2.50506 87.1809 2.50506C90.8109 2.50506 94.4509 2.50505 98.0609 2.71505C100.84 2.90995 103.629 2.92999 106.411 2.77505C109.411 2.58505 112.331 3.24505 115.261 3.11505C117.671 2.99505 120.101 2.95506 122.481 3.00506C125.218 3.00711 127.952 3.16403 130.671 3.47506C133.728 3.73721 136.803 3.69029 139.851 3.33505C142.431 3.14505 145.001 3.03506 147.571 2.78506C149.386 2.61971 151.21 2.57959 153.031 2.66503C154.711 2.73503 156.501 2.37505 158.261 2.36505C162.491 2.36505 166.721 2.36504 170.951 2.26504C173.142 2.07531 175.344 2.03522 177.541 2.14505C179.095 2.18588 180.65 2.10564 182.191 1.90506C183.872 1.95436 185.552 1.78969 187.191 1.41503C187.431 1.38634 187.673 1.3931 187.911 1.43505ZM3.11096 1.33505C3.04096 1.28505 2.97094 1.20504 2.90094 1.20504C2.83094 1.20504 2.76095 1.27506 2.69095 1.31506C2.62095 1.35506 2.82096 1.44503 2.89096 1.44503C2.96096 1.44503 3.04096 1.33505 3.11096 1.33505ZM50.6209 1.04504C50.6264 1.01529 50.6264 0.984796 50.6209 0.955043H50.5309V1.03506L50.6209 1.04504ZM61.851 4.12506C61.551 4.12506 61.291 4.03504 61.021 4.01504C60.531 4.01504 60.021 3.66504 59.611 4.23504C59.561 4.31504 59.671 4.61506 59.791 4.72506C59.9915 4.8902 60.2371 4.99093 60.4958 5.01413C60.7546 5.03732 61.0143 4.98187 61.241 4.85504C61.411 4.76504 61.851 4.75506 61.851 4.12506ZM62.991 3.41503C62.5509 3.13266 62.0553 2.94815 61.5377 2.87396C61.0201 2.79977 60.4926 2.83765 59.991 2.98504C60.8886 3.49506 61.9453 3.64856 62.951 3.41503H62.991ZM70.4709 3.46505L68.741 3.69503C69.411 4.60503 69.9209 4.07505 70.4309 3.46505H70.4709ZM73.021 3.71505C72.891 3.63505 72.711 3.43506 72.601 3.47506C72.5411 3.48681 72.4843 3.51057 72.434 3.54495C72.3836 3.57932 72.3408 3.62358 72.308 3.67501C72.2753 3.72645 72.2534 3.784 72.2436 3.84417C72.2337 3.90434 72.2363 3.96588 72.2509 4.02505C72.2779 4.08436 72.3197 4.13576 72.3722 4.17428C72.4247 4.21281 72.4863 4.23717 72.551 4.24505C72.751 4.22505 72.921 4.06505 72.981 3.71505H73.021ZM81.7109 5.35504C80.9409 5.35504 80.2709 4.96505 79.7109 5.52505C79.5209 5.72505 79.821 5.96504 80.021 6.07504C80.671 6.45504 81.161 6.18505 81.671 5.33505L81.7109 5.35504ZM87.4009 5.63504C87.4009 5.41504 87.3009 5.27504 87.1209 5.38504C87.0078 5.44972 86.9171 5.5474 86.861 5.66503C86.861 5.73503 86.9709 5.85504 87.0309 5.95504L87.4009 5.63504ZM89.011 5.92504C88.651 5.92504 88.4509 5.44506 88.0609 5.62506C88.0609 5.62506 88.0609 5.89505 88.0609 5.99505C88.3709 6.48505 88.6609 5.99504 88.9709 5.92504H89.011ZM89.8409 5.51504C89.4409 5.37504 89.311 5.82504 89.021 5.92504C89.371 6.33504 89.3709 6.33504 89.851 5.51504H89.8409ZM92.771 6.19503L92.611 5.76504C92.221 5.87504 92.021 5.87504 92.141 6.07504C92.2457 6.22845 92.3912 6.34966 92.5609 6.42504C92.6209 6.46504 92.851 6.41503 92.731 6.19503H92.771ZM95.4109 5.95504C94.9309 5.86504 94.5109 5.68506 94.0909 6.03506C94.0795 6.09802 94.0816 6.16268 94.0971 6.22476C94.1126 6.28684 94.1412 6.34489 94.1809 6.39505C94.6009 6.56505 95.0609 6.66504 95.3709 5.95504H95.4109ZM98.611 6.08505C98.611 5.80505 98.551 5.66504 98.321 5.63504C98.1101 5.61941 97.8998 5.67101 97.7201 5.78241C97.5405 5.8938 97.4007 6.05929 97.321 6.25506C97.201 6.47506 97.4409 6.58506 97.6209 6.62506C98.0609 6.74506 98.281 6.33505 98.571 6.08505H98.611ZM99.671 7.87506L99.5909 7.82504C99.5959 7.88494 99.5959 7.94516 99.5909 8.00506C99.6207 8.01051 99.6512 8.01051 99.6809 8.00506C99.6809 8.00506 99.631 7.90506 99.631 7.87506H99.671ZM103.801 6.52505C103.001 6.08505 102.591 5.46506 102.011 5.75506C101.431 6.04506 100.611 5.75505 99.921 5.80505C99.521 5.80505 99.261 5.61506 99.111 6.15506C98.961 6.69506 99.491 6.82504 99.741 6.85504C101.09 6.98189 102.451 6.8702 103.761 6.52505H103.801ZM105.741 7.41503L105.661 7.32504L105.571 7.40506L105.691 7.50506L105.741 7.41503ZM108.051 6.41503C108.051 5.57503 107.051 6.27504 106.541 5.82504C106.321 5.60504 105.811 6.02504 105.861 6.32504C105.981 7.08504 106.551 6.66503 106.651 6.66503C107.281 6.44503 108.041 7.16506 108.011 6.40506L108.051 6.41503ZM108.581 7.76504C108.505 7.71649 108.42 7.68258 108.331 7.66503C108.281 7.66503 108.231 7.76504 108.191 7.82504C108.26 7.87321 108.338 7.90721 108.421 7.92504C108.441 7.90504 108.491 7.81506 108.541 7.75506L108.581 7.76504ZM109.751 7.94503L109.661 7.73504C109.661 7.73504 109.551 7.79505 109.561 7.80505C109.584 7.88584 109.617 7.9632 109.661 8.03506L109.751 7.94503ZM110.411 6.84506C109.901 6.54506 109.741 5.60506 108.901 5.84506C108.471 5.96506 108.381 6.13505 108.371 6.52505C108.371 7.13505 108.701 6.88504 109.011 6.85504C109.441 6.78504 109.911 6.83505 110.371 6.83505L110.411 6.84506ZM110.621 7.84506L110.541 7.75506L110.451 7.83505L110.571 7.93505L110.621 7.84506ZM111.221 6.65506L111.141 6.55505L111.051 6.64505L111.171 6.73504L111.221 6.65506ZM112.601 6.65506C112.601 6.54506 112.431 6.44504 112.321 6.35504C112.246 6.40568 112.176 6.46256 112.111 6.52505C112.181 6.63505 112.241 6.77504 112.341 6.82504C112.441 6.87504 112.601 6.81505 112.561 6.61505L112.601 6.65506ZM117.221 7.99505C117.151 7.94505 117.071 7.86504 117.001 7.85504C116.931 7.84504 116.841 7.93506 116.761 7.97506L116.981 8.13504L117.221 7.99505ZM124.581 6.99505C123.701 6.74505 122.811 6.29506 121.991 7.12506C122.851 6.79506 123.701 7.33504 124.541 6.92504L124.581 6.99505ZM148.851 3.08505C148.715 3.03902 148.574 3.00882 148.431 2.99505C148.321 2.99505 148.091 2.99506 148.281 3.22506C148.471 3.45506 148.541 3.29504 148.681 3.29504C148.821 3.29504 148.751 3.17505 148.851 3.08505ZM165.581 3.13504L165.491 3.08505V3.26504C165.491 3.26504 165.561 3.26505 165.581 3.21505C165.601 3.16505 165.551 3.16504 165.561 3.13504H165.581Z"
                    fill="#EFA213"
                  ></path>
                  <path
                    d="M154.851 7.40512L154.261 7.75513C153.911 8.64513 152.571 9.35513 151.861 8.75513C151.151 8.15513 150.591 8.5451 150.041 8.9451C149.521 8.3551 150.761 8.3351 150.271 7.9451C149.781 7.5551 149.581 7.89511 149.331 8.35511C149.201 8.61511 148.971 8.20513 148.781 8.12513C148.251 7.92513 147.641 7.46512 147.671 8.68512C147.671 9.19512 147.091 9.24513 146.671 9.22513C143.081 9.03513 139.541 9.75513 135.981 9.78513C134.418 9.93961 132.844 9.93961 131.281 9.78513C131.801 8.91513 132.571 9.98512 132.991 9.21512C132.991 8.58512 131.911 9.46511 132.091 8.60511C132.161 8.24511 131.921 7.70511 132.531 7.60511C133.141 7.50511 133.011 7.99511 133.161 8.32511C133.311 8.65511 133.531 9.67512 134.281 8.80512C134.432 8.78525 134.579 8.74833 134.721 8.6951C134.721 8.3751 134.461 8.49512 134.291 8.46512L133.671 7.46512C136.171 6.93512 138.561 8.26512 141.141 7.93512C140.843 7.66582 140.477 7.48265 140.082 7.40515C139.688 7.32766 139.279 7.35875 138.901 7.49512C139.671 6.80512 141.331 6.6751 142.841 7.1351C142.761 7.8751 141.841 7.06513 141.771 7.72513C143.361 8.57513 143.391 8.58511 143.951 7.17511C144.091 6.82511 144.311 6.99512 144.481 6.90512C145.321 6.45512 146.281 6.90511 147.081 6.39511C147.371 7.00511 146.211 7.0751 146.701 7.4451C147.461 8.0151 148.371 7.44513 149.261 7.59513C149.121 6.49513 148.161 7.28513 147.901 6.59513C148.671 6.53513 149.421 6.5051 150.161 6.4151C150.279 6.39203 150.401 6.39456 150.518 6.42252C150.635 6.45048 150.744 6.50324 150.839 6.57718C150.934 6.65113 151.012 6.74453 151.067 6.85114C151.123 6.95775 151.155 7.07504 151.161 7.1951C151.251 8.0351 151.691 8.57512 152.411 8.30512C153.411 7.93512 152.351 7.30511 152.411 6.76511C152.411 6.59511 152.301 6.41513 152.201 6.12513C153.131 6.43513 154.851 4.96512 154.851 7.40512ZM134.851 8.00513L134.521 7.82511L134.411 7.59513L134.281 7.72513L134.511 7.83512C134.511 8.01512 134.511 8.12513 134.741 8.09513C134.971 8.06513 134.851 8.03513 134.851 8.00513ZM138.601 8.59513C138.312 8.45782 137.984 8.42261 137.672 8.49524C137.359 8.56787 137.081 8.74405 136.881 8.99512C137.521 9.14512 138.121 9.33513 138.591 8.59513H138.601ZM139.861 8.59513C139.724 8.55675 139.583 8.52997 139.441 8.51511C139.36 8.54346 139.285 8.58765 139.221 8.64511C139.321 8.85511 139.501 8.86513 139.691 8.81513C139.881 8.76513 139.771 8.69513 139.851 8.59513H139.861ZM142.251 8.59513L142.121 8.35511C142.058 8.42059 142.011 8.49912 141.981 8.58512C141.981 8.65512 142.061 8.73513 142.101 8.81513L142.251 8.59513ZM145.081 7.59513C145.081 7.59513 145.081 7.52513 145.081 7.50513C145.081 7.48513 145.021 7.50513 144.991 7.50513L144.941 7.58512L145.081 7.59513ZM145.991 8.30512C145.641 7.94512 145.441 8.19513 145.271 8.53513C145.571 8.72513 145.731 8.33512 145.981 8.33512L145.991 8.30512ZM146.861 8.1951C146.541 7.8151 146.301 8.19513 146.041 8.31513C146.181 8.89513 146.571 8.65513 146.911 8.56513C146.931 8.4418 146.909 8.31553 146.851 8.20511L146.861 8.1951ZM150.561 6.79511C150.567 6.76536 150.567 6.73486 150.561 6.70511H150.481L150.431 6.79511H150.561ZM153.001 7.1351C153.481 7.2551 153.761 6.97511 154.051 6.42511C153.561 6.42511 153.051 6.06511 152.921 6.73511C152.892 6.87572 152.917 7.02214 152.991 7.14511L153.001 7.1351ZM154.211 7.74512C153.951 7.74512 153.651 7.36512 153.451 7.83512L153.281 8.09513L153.571 7.96512L154.211 7.74512Z"
                    fill="#EFA213"
                  ></path>
                  <path
                    d="M180.25 8.19529C179.13 8.60529 178.83 7.08529 177.91 7.19529C177.62 7.53529 177.46 8.08529 176.85 7.94529C176.4 6.99529 175.63 7.12529 175.08 7.66529C174.605 8.11632 173.992 8.39457 173.34 8.45529C173.09 7.93529 173.63 7.76531 173.87 7.18531C172.44 7.71531 170.97 7.11531 169.87 8.18531C169.66 8.37531 169.43 8.47529 169.24 8.29529C169.05 8.11529 169.46 7.83529 169.45 7.82529C169 7.11529 169.1 5.82529 167.75 6.07529C168.17 5.49529 168.75 5.86529 169.29 5.79529C170.786 5.59037 172.304 5.59037 173.8 5.79529C175.71 6.10529 177.6 5.17531 179.32 6.03531C178.31 6.63531 178.44 7.01529 180.25 8.19529ZM170.68 6.29529C170.63 6.23529 170.6 6.14531 170.54 6.12531C170.499 6.11154 170.455 6.10636 170.412 6.11008C170.368 6.1138 170.326 6.12635 170.288 6.14695C170.249 6.16754 170.215 6.19575 170.188 6.22986C170.161 6.26397 170.141 6.30326 170.13 6.34531C169.95 6.34531 169.75 6.34531 169.67 6.56531C169.67 6.56531 169.73 6.65529 169.77 6.66529C169.813 6.68612 169.861 6.69655 169.909 6.69571C169.958 6.69488 170.005 6.68282 170.048 6.6605C170.09 6.63817 170.127 6.60617 170.155 6.56708C170.184 6.52799 170.202 6.48288 170.21 6.43531L170.68 6.29529ZM171.38 6.88529C171.38 6.88529 171.38 6.8153 171.32 6.8053C171.284 6.79553 171.246 6.79553 171.21 6.8053L171.28 6.93531L171.38 6.88529ZM172.11 6.5553L172.02 6.50531V6.68531H172.1C172.1 6.68531 172.1 6.5853 172.11 6.5553ZM173.59 6.62531C173.52 6.57531 173.46 6.4953 173.4 6.4953C173.32 6.51159 173.245 6.54578 173.18 6.59531C173.24 6.64531 173.31 6.72529 173.37 6.73529C173.43 6.74529 173.51 6.66531 173.59 6.62531ZM174.73 6.94529L174.65 6.84531L174.56 6.97531L174.64 7.0253L174.73 6.94529ZM175.25 6.72531L175.32 6.5253L175.14 6.59531L175.25 6.72531ZM176.74 6.54529C176.28 6.69529 175.84 5.77529 175.37 6.54529C175.448 6.65467 175.55 6.74387 175.67 6.80542C175.789 6.86698 175.921 6.89911 176.055 6.89911C176.189 6.89911 176.321 6.86698 176.44 6.80542C176.56 6.74387 176.662 6.65467 176.74 6.54529ZM176.98 6.6153H176.82V6.78531L176.98 6.6153ZM177.89 7.16529V6.65531C177.79 6.72531 177.61 6.78531 177.6 6.87531C177.59 6.96531 177.75 7.09529 177.85 7.16529H177.89Z"
                    fill="#EFA213"
                  ></path>
                  <path
                    d="M167.651 6.13513C167.617 6.15708 167.591 6.18928 167.577 6.22705C167.562 6.26481 167.56 6.30619 167.571 6.34515C167.503 6.35357 167.439 6.38472 167.39 6.43365C167.341 6.48258 167.31 6.54646 167.301 6.61514C166.801 6.25514 166.111 6.07514 165.741 6.42514C165.371 6.77514 165.381 7.55514 166.251 7.80514C165.791 8.35514 165.081 7.75514 164.641 8.36514C164.795 7.98051 164.805 7.55327 164.669 7.16196C164.533 6.77064 164.26 6.44154 163.901 6.23514C164.181 7.60514 164.181 8.54514 162.581 7.45514C161.991 7.05514 161.271 8.69514 160.481 7.55514C160.481 7.55514 160.031 8.47516 159.861 7.50516C159.831 7.38904 159.831 7.26707 159.861 7.15097C159.892 7.03487 159.951 6.92852 160.035 6.84216C160.118 6.75581 160.222 6.69234 160.337 6.65784C160.452 6.62333 160.574 6.61896 160.691 6.64514C161.202 6.78931 161.741 6.80988 162.261 6.70514C161.351 5.58514 160.261 6.25515 159.261 6.46515C159.261 6.34515 159.201 6.21515 159.031 6.28515L159.181 6.55514C159.551 7.55514 158.841 7.29513 158.361 7.35513C157.881 7.41513 157.271 7.55513 156.981 7.04513C156.841 6.79513 157.251 6.47514 157.621 6.55514C157.991 6.63514 158.261 7.09513 158.321 6.44513C158.321 6.03513 157.911 6.17515 157.661 6.15515C157.411 6.13515 157.271 6.24513 157.111 5.94513C159.981 5.94513 162.811 5.39513 165.661 5.94513C166.311 6.06513 167.031 5.54513 167.651 6.13513ZM163.531 6.74515C163.021 6.01515 162.671 6.54515 162.301 6.74515C162.484 6.86516 162.698 6.92911 162.916 6.92911C163.135 6.92911 163.349 6.86516 163.531 6.74515Z"
                    fill="#EFA213"
                  ></path>
                  <path
                    d="M184.31 6.47525C183.73 6.26525 183.71 6.32523 184.16 5.36523C182.82 6.36523 181.5 6.23523 180.09 6.07523C180.6 6.53523 180.4 7.18523 180.58 7.67523C181.09 7.67523 180.97 7.19523 181.15 7.01523C181.202 6.9713 181.263 6.94026 181.329 6.92462C181.395 6.90898 181.464 6.90918 181.53 6.92523C181.83 7.00523 181.71 7.13524 181.53 7.30524C181.41 7.43097 181.337 7.59443 181.325 7.7677C181.312 7.94097 181.36 8.1133 181.46 8.25525C181.85 8.59525 182 7.81523 182.4 7.89523C182.68 6.64523 183.7 7.57524 184.28 7.21524C184.28 6.92524 184.75 6.63525 184.31 6.47525Z"
                    fill="#EFA213"
                  ></path>
                  <path
                    d="M126.23 9.08513C126.698 9.36979 127.227 9.53831 127.774 9.57658C128.32 9.61485 128.868 9.52178 129.37 9.30513C129.05 8.93513 128.62 8.98512 128.19 8.89512C127.52 8.75512 126.85 9.38513 126.23 9.08513Z"
                    fill="#EFA213"
                  ></path>
                  <path
                    d="M125.93 8.8652C126.015 8.95666 126.117 9.03128 126.23 9.08521C126.126 9.01692 126.038 8.92847 125.97 8.8252L125.93 8.8652Z"
                    fill="#EFA213"
                  ></path>
                  <path
                    d="M167.322 6.66498C167.422 7.18498 166.472 6.73499 166.722 7.27499C166.972 7.81499 167.722 7.965 168.492 7.875C167.262 7.875 168.162 6.725 167.612 6.375C167.592 6.565 167.522 6.68498 167.322 6.66498Z"
                    fill="#EFA213"
                  ></path>
                  <path
                    d="M124.328 8.33518C124.008 8.28518 123.418 8.06518 123.328 8.52518C123.268 9.20518 123.878 8.74517 124.158 8.79517C124.72 8.85509 125.284 8.87514 125.848 8.85517C125.558 8.11517 124.848 8.40518 124.328 8.33518Z"
                    fill="#EFA213"
                  ></path>
                  <path
                    d="M129.141 7.83531L131.351 8.00533C130.601 7.49533 129.851 7.20531 129.141 7.83531Z"
                    fill="#EFA213"
                  ></path>
                  <path
                    d="M128.439 7.99522L129.129 7.83521C128.96 7.74451 128.805 7.63001 128.669 7.49522C128.289 6.98522 127.909 7.29522 127.549 7.49522C127.505 7.51836 127.467 7.55088 127.436 7.59049C127.406 7.63011 127.385 7.67586 127.375 7.7245C127.364 7.77313 127.365 7.82349 127.376 7.87199C127.387 7.92049 127.408 7.96599 127.439 8.00523C127.769 8.49523 128.109 8.07522 128.439 7.99522Z"
                    fill="#EFA213"
                  ></path>
                  <path
                    d="M130.382 8.70504C129.942 8.70504 129.302 8.37504 129.382 9.29504C129.802 9.02504 130.292 9.93504 130.662 9.23504C130.693 9.18338 130.71 9.12458 130.712 9.0643C130.714 9.00402 130.7 8.94431 130.671 8.89099C130.643 8.83767 130.602 8.79252 130.551 8.75995C130.5 8.72737 130.442 8.70846 130.382 8.70504Z"
                    fill="#EFA213"
                  ></path>
                  <path
                    d="M154.852 7.40499C155.392 7.67499 155.732 7.27498 156.272 7.11498C155.442 6.40498 155.292 7.47499 154.852 7.40499Z"
                    fill="#EFA213"
                  ></path>
                  <path
                    d="M52.9492 0.855209H53.8492C53.5692 0.515209 53.2592 0.715209 52.9492 0.855209Z"
                    fill="#EFA213"
                  ></path>
                  <path
                    d="M156.539 8.02521C156.629 8.07521 156.739 8.1752 156.819 8.1652C156.899 8.1552 157.019 8.0252 157.199 7.8852C157.019 7.8152 156.899 7.71522 156.819 7.74522C156.739 7.77522 156.629 7.92521 156.539 8.02521Z"
                    fill="#EFA213"
                  ></path>
                  <path
                    d="M184.319 7.21533C184.319 7.47533 184.179 7.77533 184.609 7.77533C184.719 7.77533 184.919 7.60534 184.909 7.53534C184.849 7.15534 184.489 7.39533 184.319 7.21533Z"
                    fill="#EFA213"
                  ></path>
                  <path
                    d="M158.852 8.1752C158.879 8.26075 158.92 8.34164 158.972 8.41519C158.972 8.41519 159.162 8.41519 159.162 8.35519C159.154 8.26509 159.13 8.1771 159.092 8.09521L158.852 8.1752Z"
                    fill="#EFA213"
                  ></path>
                  <path
                    d="M176.85 8.01514L176.77 8.09515C176.77 8.09515 176.85 8.04514 176.85 8.01514Z"
                    fill="#EFA213"
                  ></path>
                  <path
                    d="M176.301 8.33521C176.301 8.33521 176.301 8.42521 176.361 8.46521L176.751 8.0752C176.571 8.0952 176.361 8.06521 176.301 8.33521Z"
                    fill="#EFA213"
                  ></path>
                  <path
                    d="M126.169 7.55517C126.079 7.44517 125.969 7.46517 125.969 7.55517C125.969 7.64517 126.089 7.76516 126.149 7.86516L126.329 7.73516C126.279 7.6718 126.226 7.61169 126.169 7.55517Z"
                    fill="#EFA213"
                  ></path>
                  <path
                    d="M148.221 8.50537C148.161 8.50537 148.051 8.58536 148.051 8.64536C148.051 8.70536 148.051 8.86537 148.131 8.87537C148.211 8.88537 148.411 8.87534 148.381 8.69534C148.351 8.51534 148.271 8.56537 148.221 8.50537Z"
                    fill="#EFA213"
                  ></path>
                  <path
                    d="M138.129 7.16541L138.039 7.06543L137.809 7.16541C137.809 7.16541 137.879 7.25543 137.909 7.25543L138.129 7.16541Z"
                    fill="#EFA213"
                  ></path>
                  <path
                    d="M155.321 6.21529C155.285 6.20949 155.247 6.20949 155.211 6.21529V6.37529H155.331C155.331 6.37529 155.341 6.22529 155.321 6.21529Z"
                    fill="#EFA213"
                  ></path>
                  <path
                    d="M151.649 6.94531L151.559 6.71533C151.564 6.78524 151.564 6.85541 151.559 6.92532C151.559 6.92532 151.619 6.94531 151.649 6.94531Z"
                    fill="#EFA213"
                  ></path>
                  <path
                    d="M151.541 6.66498V6.715L151.461 6.60498L151.521 6.685L151.541 6.66498Z"
                    fill="#EFA213"
                  ></path>
                  <path
                    d="M178.331 7.96523L178.391 7.88523L178.301 7.86523L178.331 7.96523Z"
                    fill="#EFA213"
                  ></path>
                  <path
                    d="M134.18 8.39502V8.45502H134.23L134.18 8.39502Z"
                    fill="#EFA213"
                  ></path>
                  <path
                    d="M134.181 8.68509V8.45508C134.101 8.53508 134.071 8.60509 134.181 8.68509Z"
                    fill="#EFA213"
                  ></path>
                </g>
              </svg>
            </span>
      </h2>
      <div className="flex flex-wrap gap-[35px]">
        {blog.map((item, index) => (
          <div className="articlies_card border rounded-lg">
            <div className="articlies_card_image">
              <img src={item.img} alt="" />
              <span className='add_button_filter2'><MdAdd/></span>
            </div>
            <div className="p-[20px]">
              <div className="flex items-center justify-between text-[#636363]">
                <div>{item.categories}</div>
                <div className="flex items-center gap-2">
                  <FaRegUser /> {item.author}
                </div>
              </div>
              <h4 className="text-[18px] text-[#3D3C3C] my-[10px] font-semibold leading-[1.4em] transition-all hover:text-[#fcab14] cursor-pointer">
                {item.title.substring(0, 50) + "..."}
              </h4>
              <p className="text-[14px] text-[#636363] font-normal">
                {item.dec.substring(0, 200) + "..."}
              </p>
            </div>
          </div>
        ))}

        <div className="flex cursor-pointer  w-full items-center justify-center">
        {count !== blogs.length-1 ? (
          <div className='btn flex items-center justify-center transition-all hover:bg-[#fcab14]' onClick={moreCard}> <RiLeafLine size={25} />View More</div>
        ) : (
          <div className='btn flex items-center justify-center transition-all hover:bg-[#fcab14]' onClick={lessBtn}> <RiLeafLine size={25} /> LESS</div>
        )}
        </div>
      
      </div>
    </div>
  );
};

export default ArticelComp;
