/**
 * @param {number[]} nums
 * @return {number[]}
 */

var sortArray = function(nums) {
    return quickSort(nums, 0, nums.length - 1);
};

function quickSort(nums, low, high) {
    if (low < high) {

        //pivot
        let pivotIndex = partition(nums, low, high);

        //before and after the partition
        quickSort(nums, low, pivotIndex - 1);
        quickSort(nums, pivotIndex + 1, high);
    }
    return nums;
};

function partition(nums, low, high) {

    //the last 
    let pivot = nums[high]; 

    //smaller number
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (nums[j] <= pivot) {
            i++;

            //switch i and j
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }
    }

    //to correct position
    let temp = nums[i + 1];
    nums[i + 1] = nums[high];
    nums[high] = temp;
    
    return i + 1;
}

//example 1
let nums1 = [5, 2, 3, 1];
console.log(quickSort(nums1));

//example 2 
let nums2 = [5, 1, 1, 2, 0, 0];
console.log(quickSort(nums2)); 
