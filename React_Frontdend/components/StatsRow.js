import React from 'react';
import { FaUserMd, FaBed } from 'react-icons/fa'; // FontAwesome Doctor and Bed Icons
import { MdPeople, MdPriorityHigh } from 'react-icons/md'; // Material Icons for Patients and Urgent Cases
import { RiHospitalLine } from 'react-icons/ri'; // RemixIcon for Admitted Patients
import { AiOutlineClockCircle } from 'react-icons/ai'; // Ant Design Icons for Waiting List
import './styles.css'; // Make sure this path is correct

const stats = [
  { label: "Today's Patients", value: 159, Icon: MdPeople, color: 'text-pink-600', bgColor: 'bg-pink-100' },
  { label: 'Available Doctors', value: 18, Icon: FaUserMd, color: 'text-purple-600', bgColor: 'bg-purple-100' },
  { label: 'Available Beds', value: 25, Icon: FaBed, color: 'text-yellow-600', bgColor: 'bg-yellow-100' },
  { label: "Today's Operation", value: 8, Icon: RiHospitalLine, color: 'text-red-600', bgColor: 'bg-red-100' },
  { label: 'Waiting List', value: 34, Icon: AiOutlineClockCircle, color: 'text-blue-600', bgColor: 'bg-blue-100' },
  { label: 'Urgent Cases', value: 10, Icon: MdPriorityHigh, color: 'text-green-600', bgColor: 'bg-green-100' }
];

const StatsRow = () => {
  return (
    <div className="grid grid-cols-6 gap-4 my-2">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex items-center bg-white custom-shadow rounded-lg p-2"
        >
          <div className={`p-2 rounded-full ${stat.bgColor}`}>
            <stat.Icon className={`text-3xl ${stat.color}`} />
          </div>
          <div className="ml-2">
            <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
            <h2 className="text-3xl font-bold text-gray-800">{stat.value}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsRow;
