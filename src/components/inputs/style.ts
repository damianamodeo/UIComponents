// const style = {
//   input:`peer
//     block
//     w-full
//     appearance-none
//     border-0
//     border-b-2
//     border-gray-300
//     px-2.5
//     pb-
//     pt-5
//     font-bold
//     focus:font-normal
//     focus:text-grey-900
//     text-secondary-500
//     dark:focus:text-secondary-800
//     focus:border-b-4
//     focus:border-secondary-500
//     focus:outline-none
//     focus:ring-0
//     dark:border-gray-600
//     dark:bg-black
//     dark:text-white
//     dark:focus:border-secondary-900 `,
//   label: `absolute
//     top-4
//     left-2.5
//     z-10
//     origin-[0]
//     -translate-y-4
//     scale-[65%]
//     transform
//     text-gray-500
//     duration-300
//     peer-placeholder-shown:translate-y-0
//     peer-placeholder-shown:scale-75
//     peer-focus:-translate-y-4
//     peer-focus:scale-75
//     peer-focus:text-green-500
//     dark:text-gray-400
//     peer-focus:dark:text-secondary-200 `,
// };

const style = {
	input: `block py-2.5 px-0 w-full text-sm text-grey-900 
  bg-transparent border-0 border-b-2 border-grey-300 
  appearance-none dark:text-grey-200 focus:dark:text-white dark:border-grey-600 
  dark:focus:border-secondary-200 focus:outline-none 
  focus:ring-0 focus:border-secondary-600 peer
  font-bold focus:font-normal`,
	label: `absolute text-sm text-grey-500 dark:text-grey-400 
  duration-300 transform -translate-y-6 scale-75 top-3 
  -z-10 origin-[0] peer-focus:left-0 peer-focus:text-secondary-600 
  peer-focus:dark:text-secondary-200 peer-placeholder-shown:scale-100 
  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
  peer-focus:-translate-y-6
  peer-focus:font-bold peer-focus:text-base`,
};

export default style;
