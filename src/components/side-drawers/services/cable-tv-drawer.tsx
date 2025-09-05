import React, { useState } from 'react';
import { SideDrawer } from '../side-drawer';
import { GInput } from '@/components/inputs/GInput';
import { Button } from "@/components/buttons";



const CableTvDrawer = ({
    handleClose,
    showCableTv,
}: {
    handleClose: () => void;
    showCableTv: boolean;
}) => {
    return (
        <SideDrawer
            title="Cable Tv"
            open={showCableTv}
            onClose={handleClose}
        >
            <div className="my-3">
                <div className="my-4">
                    <GInput label="Select provider" placeholder="Sporty" />
                    <GInput label="Username" placeholder="Enter your sporty name" />
                    <GInput label="Enter amount" placeholder="0.00" />
                    <div className="my-4 flex gap-2">
                        <span className="bg-[#F6F6F6] w-full text-text-color-500 border border-[#DCDCDC] py-2 px-4 rounded-lg text-center font-grotesk-medium">
                            $ 2000
                        </span>
                        <span className="bg-[#F6F6F6] w-full text-text-color-500 border border-[#DCDCDC] py-2 px-4 rounded-lg text-center font-grotesk-medium">
                            $ 2000
                        </span>
                        <span className="bg-[#F6F6F6] w-full text-text-color-500 border border-[#DCDCDC] py-2 px-4 rounded-lg text-center font-grotesk-medium">
                            $ 2000
                        </span>
                    </div>
                    <Button
                        loading={false}
                        fullWidth
                        text="Continue"
                        type="bgGreen"
                        action={() => {
                            // setShowWithdrawOtp(true);
                        }}
                    />
                </div>
            </div>
        </SideDrawer>
    );
};

export default CableTvDrawer;