<script>
export default {
  data() {
    return {
      data: decodeURIComponent(localStorage.getItem("dailyExpenses")),
    };
  },
  computed: {
    dailyExpenses() {
      return localStorage.getItem("dailyExpenses")
        ? JSON.parse(decodeURIComponent(localStorage.getItem("dailyExpenses")))
        : false;
    },
  },
};
</script>

<template>
  <div class="fundall-black shadow-lg lg:w-96 h-96 p-8 rounded-xl bg-white">
    <h1>Daily Expenses Summary</h1>
    <div v-if="dailyExpenses" class="flex flex-col justify-between mt-8">
      <table class="min-w-full m-1 divide-gray-200 table-fixed">
        <thead class="">
          <tr>
            <th
              scope="col"
              class="
                py-3
                px-6
                text-xs
                font-medium
                tracking-wider
                text-left text-gray-700
                uppercase
                dark:text-gray-400
              "
            >
              Date
            </th>
            <th
              scope="col"
              class="
                py-3
                px-6
                text-xs
                font-medium
                tracking-wider
                text-left text-gray-700
                uppercase
                dark:text-gray-400
              "
            >
              Amount
            </th>
          </tr>
        </thead>

        <tbody class="divide-y px-2 divide-gray-200 mx-2 scroll">
          <tr class="hover:bg-gray-100">
            <td class="py-4 px-6 text-gray-900 flex items-center">
              <img src="../assets/img/Mask.png" alt="" class="mr-3" />
              {{ dailyExpenses.date }}
            </td>
            <td class="py-4 px-6 font-medium text-gray-500 text-primary">
              ₦{{ dailyExpenses.value }}
            </td>
          </tr>
        </tbody>
      </table>
      <div class="mt-5">
        <p class="flex items-center justify-center">
          <span
            class="
              text-lg
              font-bold
              border
              mr-2
              rounded
              p-2
            "
            >1</span
          >
          of
          <span class="text-lg font-bold m-1 mr-2" id="total"
            >5</span
          >
          <span class="s">
            <img src="../../assets/img/prev.png" alt="" class="p-1" />
          </span>
          <span>
            <img src="../../assets/img/next.png" alt="" class="p-1" />
          </span>
        </p>
      </div>
    </div>
    <div
      v-else
      class="flex flex-col h-full font-semibold justify-center items-center"
    >
      <img class="w-40 mb-8" src="/src/assets/empty_cart.svg" alt="" />
      <p>No expenses recorded today</p>
    </div>
  </div>
</template>