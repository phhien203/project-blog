const { default: dynamic } = require('next/dynamic');

const DivisionGroupsDemo = dynamic(() => import('./DivisionGroupsDemo'));

export default DivisionGroupsDemo;
