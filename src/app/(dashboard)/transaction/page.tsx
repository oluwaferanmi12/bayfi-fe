import { Button } from '@/components/buttons';
import { Text } from '@/components/texts/text'
import React from 'react'

function Transaction() {
  return (
    <div className="bg-white rounded-lg p-4">
      <div className='flex justify-between'>
        <div>
          <Text value="Transaction History" type="header-text-20" />
          <p className="text-bayfi-black-500 text-xs">
            See result and status of already raised claims
          </p>
        </div>
        <div>
            <Button loading smallerType lessRounded type='bgGrey' text='Export PDF' />
        </div>
      </div>
    </div>
  );
}

export default Transaction