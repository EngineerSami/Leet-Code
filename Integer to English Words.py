class Solution:
    def numberToWords(self, num: int) -> str:
        if num == 0:
            return "Zero"

        ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]
        teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"]
        tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"]
        thousands = ["", "Thousand", "Million", "Billion"]

        def less_than_thousand(n):
            if n == 0:
                return ""
            elif n < 10:
                return ones[n]
            elif n < 20:
                return teens[n - 10]
            elif n < 100:
                return tens[n // 10] + (" " + ones[n % 10] if n % 10 != 0 else "")
            else:
                return ones[n // 100] + " Hundred" + (" " + less_than_thousand(n % 100) if n % 100 != 0 else "")

        res = ""
        for i, chunk in enumerate(self.split_by_thousands(num)):
            if chunk > 0:
                res = less_than_thousand(chunk) + (" " + thousands[i] if thousands[i] else "") + (" " + res if res else "")

        return res.strip()

    def split_by_thousands(self, num):
        chunks = []
        while num > 0:
            chunks.append(num % 1000)
            num //= 1000
        return chunks
# Time: O(1)
# Space: O(1)