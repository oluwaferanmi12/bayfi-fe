import React, { useState } from 'react';
import { SideDrawer } from '../side-drawer';
import { GInput } from '@/components/inputs/GInput';
import { Button } from "@/components/buttons";
import { Text } from "@/components/texts/text";
import { UserProfile } from "@/components/UIs/user-name-profile";



const AirtimeDrawer = ({
    handleClose,
    showAirtimeModal,
}: {
    handleClose: () => void;
    showAirtimeModal: boolean;
}) => {
    return (
        <SideDrawer
            title="Buy airtime"
            open={showAirtimeModal}
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
                        text="Buy Airtime"
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

export default AirtimeDrawer;