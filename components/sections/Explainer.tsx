import React from 'react';

interface ExplainerProps {
  leftTitle: string;
  leftDescription: string;
  leftButtonText: string;
  onLeftButtonClick: () => void;
  rightTitle: string;
  rightDescription: string;
  bulletPoints: string[];
}

const sharedClasses = {
  textColor: 'text-zinc-600 dark:text-zinc-400',
  titleColor: 'text-2xl font-bold text-zinc-800 dark:text-zinc-200',
  bgColor: 'bg-zinc-100 dark:bg-zinc-700',
  buttonBgColor: 'bg-blue-500',
  buttonTextColor: 'text-white',
  buttonPadding: 'p-2',
  buttonRounded: 'rounded-lg',
  buttonMarginTop: 'mt-4',
  listBulletColor: 'text-zinc-600 dark:text-zinc-400',
  listPaddingLeft: 'pl-4 md:pl-8',
  listMarginTop: 'mt-4',
};

const LeftContent: React.FC<Omit<ExplainerProps, 'rightTitle' | 'rightDescription' | 'bulletPoints'>> = ({ leftTitle, leftDescription, leftButtonText, onLeftButtonClick }) => {
  return (
    <div className="p-8 md:w-1/2">
      <h2 className={sharedClasses.titleColor}>{leftTitle}</h2>
      <p className={`${sharedClasses.textColor} mt-2`}>
        {leftDescription}
      </p>
      <button
        className={`${sharedClasses.buttonBgColor} ${sharedClasses.buttonTextColor} ${sharedClasses.buttonPadding} ${sharedClasses.buttonRounded} ${sharedClasses.buttonMarginTop}`}
        onClick={onLeftButtonClick}>
        {leftButtonText}
      </button>
    </div>
  );
};

const RightContent: React.FC<Pick<ExplainerProps, 'rightTitle' | 'rightDescription' | 'bulletPoints'>> = ({ rightTitle, rightDescription, bulletPoints }) => {
  return (
    <div className={`p-8 md:w-1/2 ${sharedClasses.bgColor}`}>
      <h2 className={sharedClasses.titleColor}>{rightTitle}</h2>
      <p className={`${sharedClasses.textColor} mt-2`}>
        {rightDescription}
      </p>
      <ul
        className={`${sharedClasses.listBulletColor} ${sharedClasses.listPaddingLeft} ${sharedClasses.listMarginTop}`}>
        {bulletPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

const Explainer: React.FC<ExplainerProps> = (props) => {
  return (
    <div className="flex flex-col md:flex-row bg-white dark:bg-zinc-800">
      <LeftContent
        leftTitle={props.leftTitle}
        leftDescription={props.leftDescription}
        leftButtonText={props.leftButtonText}
        onLeftButtonClick={props.onLeftButtonClick}
      />
      <RightContent
        rightTitle={props.rightTitle}
        rightDescription={props.rightDescription}
        bulletPoints={props.bulletPoints}
      />
    </div>
  );
};

export default Explainer;
