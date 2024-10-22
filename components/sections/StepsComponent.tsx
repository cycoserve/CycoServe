import React from 'react';

const sharedClasses = {
  flex: 'flex',
  flexCol: 'flex flex-col',
  itemsCenter: 'items-center',
  justifyCenter: 'justify-center',
  mt10: 'mt-10',
  relative: 'relative',
  w1: 'w-1',
  h20: 'h-20',
  bgZinc300: 'bg-zinc-300',
  flexColItemsCenter: 'flex flex-col items-center',
  w12: 'w-12',
  h12: 'h-12',
  bgBlue500: 'bg-blue-500',
  textWhite: 'text-white',
  roundedFull: 'rounded-full',
  textSm: 'text-sm',
  textZinc600: 'text-zinc-600',
  mt2: 'mt-2',
  spaceY4: 'space-y-4',
  line: 'absolute w-1 bg-zinc-300',
};

interface StepProps {
  number: number;
  title: string;
}

const Step: React.FC<StepProps> = ({ number, title }) => (
  <div className={sharedClasses.flexColItemsCenter}>
    <div
      className={`${sharedClasses.w12} ${sharedClasses.h12} ${sharedClasses.bgBlue500} ${sharedClasses.textWhite} ${sharedClasses.flex} ${sharedClasses.itemsCenter} ${sharedClasses.justifyCenter} ${sharedClasses.roundedFull} shadow-lg`}
    >
      {number}
    </div>
    <p className={`${sharedClasses.mt2} ${sharedClasses.textSm} ${sharedClasses.textZinc600} font-semibold`}>
      {title}
    </p>
  </div>
);

const StepComponent: React.FC = () => (
  <div className={`${sharedClasses.flex} ${sharedClasses.flexCol} ${sharedClasses.itemsCenter} ${sharedClasses.justifyCenter} ${sharedClasses.mt10} space-y-8`}>
    <div className={`${sharedClasses.relative} ${sharedClasses.flex} ${sharedClasses.itemsCenter}`}>
      <Step number={1} title="Sign up" />
      <div className={`${sharedClasses.line}`} style={{ height: '75px', left: '50%', transform: 'translateX(-50%)', top: '50%' }}></div>
    </div>
    <div className={`${sharedClasses.relative} ${sharedClasses.flex} ${sharedClasses.itemsCenter}`}>
      <Step number={2} title="Place Order" />
      <div className={`${sharedClasses.line}`} style={{ height: '75px', left: '50%', transform: 'translateX(-50%)', top: '50%' }}></div>
    </div>
    <div className={`${sharedClasses.relative} ${sharedClasses.flex} ${sharedClasses.itemsCenter}`}>
      <Step number={3} title="Get Results" />
    </div>
  </div>
);

export default StepComponent;
