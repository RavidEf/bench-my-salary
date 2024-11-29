import './survey.css';
import Image from 'next/image';
import MaleAvatar from '../../../public/images/man-avatar.png';
import FemaleAvatar from '../../../public/images/woman-avatar.png';

/* export type UserSurveyType={

} */

export default function UserContainer(props: {
  jobUserDetails: {
    yearsOfExperience: number;
    genderId: number;
    seniorityLevel: string;
    jobFunction: string;
    industryCategory: string;
    salary: number;
  }[];
}) {
  return (
    <div className="user-container">
      <div className="avatar">
        <Image
          alt="avatar-icon"
          src={
            props.jobUserDetails[0]?.genderId === 1 ? MaleAvatar : FemaleAvatar
          }
          height={100}
          width={100}
        />
      </div>

      <div className="user-functionSeniority">
        {props.jobUserDetails[0]?.seniorityLevel}
        {props.jobUserDetails[0]?.jobFunction}
      </div>
      <div className="user-industry">
        Industry: <b>{props.jobUserDetails[0]?.industryCategory}</b>
      </div>
      <div className="user-salary">
        {' '}
        Salary: <b>{props.jobUserDetails[0]?.salary.toLocaleString()}€</b>
      </div>
      <div className="user-yrs">
        {' '}
        Years of experience: <b>{props.jobUserDetails[0]?.yearsOfExperience}</b>
      </div>
    </div>
  );
}
