import React from 'react';

interface MobileMenuItemProps {
    label: string;
}

const MobileMenuItem: React.FC<MobileMenuItemProps> = ({label}) => {
    return (
        <div className="px-3 text-center text-white hover:underline">
            {label}
        </div>
    );
}

export default MobileMenuItem;