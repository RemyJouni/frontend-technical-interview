
 

## Task 1: Fix the Runtime Error 

There is a runtime error in the contact form that prevents it from working correctly. 

**Objective:** Identify and fix the error in the `components/contact-form.tsx` file.

  

## Task 2: Change Submit Button Color 

The submit button currently uses the default styling.

**Objective:** Change the submit button color to **purple** in normal and hover states.

**File to modify:** `components/contact-form.tsx`

 
## Task 3: Add Phone Number Field 

The contact form currently only has Name, Email, and Message fields.

**Objective:** Add a new field for phone number input.

**Requirements:**
- Add a "Phone" field between the Email and Message fields
- Implement validation:
  - Phone number should be required
  - Must be numeric characters only
  - Must be more than 10 characters
  - Must be less than 14 characters
  - Display appropriate error messages

**File to modify:** `components/contact-form.tsx`

 
## Task 4: Implement Form Submission

The form currently only logs data to the console. You need to implement proper API submission with error handling.

**Objective:** Submit the form data to the `/api/contact` endpoint and handle responses appropriately.

**Requirements:**
- Make a POST request to `/api/contact` with the form data
- Use the `setIsSubmitting` state to manage loading state
- Parse the JSON response from the API
- Handle both success and error cases
- Reset the form on successful submission
- Always reset the loading state in a finally block

**On Success:**
Parse the response and show a success toast with the returned data:
```typescript
const responseData = await response.json()

toast({
  title: "Success!",
  description: responseData.message,
})
```

**On Error:**
Show an error toast with the error message:
```typescript
  toast.error("Something went wrong!" + error.message);
```

**File to modify:** `components/contact-form.tsx`

---

 

## Task 5 (Bonus): Replace Route Handler with Server Action

 Refactor the implementation to use Next.js Server Actions instead of the route handler.

