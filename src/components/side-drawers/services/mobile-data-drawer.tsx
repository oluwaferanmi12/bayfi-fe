import React, { useState } from 'react';
import { SideDrawer } from '../side-drawer';
import { GInput } from '@/components/inputs/GInput';
import { Button } from "@/components/buttons";
import { Text } from "@/components/texts/text";
import { UserProfile } from "@/components/UIs/user-name-profile";



const MobileDataDrawer = ({
    handleClose,
    showBuyData,
}: {
    handleClose: () => void;
    showBuyData: boolean;
}) => {
    return (
        <SideDrawer
            title="Buy data"
            open={showBuyData}
            onClose={handleClose}
        >
            <div>
                <div className="mt-2 mb-4">
                    <Text type="header-text-20" value="Recent beneficiaries" />
                </div>
                <div className="flex items-center justify-between">
                    <UserProfile />
                    <UserProfile />
                    <UserProfile />
                    <UserProfile />
                    <UserProfile />
                </div>

                <div className="my-4">
                    <GInput label="Select network type" placeholder="Airtel" />
                    <GInput label="Phone number" placeholder="Enter phone number" />
                    <GInput label="Enter amount" placeholder="0.00" />
                    <Button
                        loading={false}
                        fullWidth
                        text="Buy data"
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

export default MobileDataDrawer;