import React from "react";
import { Link } from "react-router-dom";

const CampaignSocial = () => {
  return (
    <div className="flex items-center gap-4">
      <Link>
        <svg
          width={18}
          height={18}
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.1559 0.450195H0.944062C0.423047 0.450195 0 0.873242 0 1.39426V16.6061C0 17.1271 0.423047 17.5502 0.944062 17.5502H8.55V10.7814H6.50602V8.2877H8.55V6.4441C8.55 4.23535 10.0819 3.03301 12.0546 3.03301C12.9987 3.03301 14.014 3.10426 14.25 3.13543V5.44215H12.678C11.6048 5.44215 11.4 5.94981 11.4 6.69793V8.2877H13.9561L13.6221 10.7814H11.4V17.5502H16.1559C16.677 17.5502 17.1 17.1271 17.1 16.6061V1.39426C17.1 0.873242 16.677 0.450195 16.1559 0.450195Z"
            fill="currentColor"
          />
        </svg>
      </Link>
    </div>
  );
};

export default CampaignSocial;
