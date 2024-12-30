
import { revalidatePath } from "next/cache";

export type FormState = {
    errors?: {
        symbol?: string[]
    }
    message?: string | null
};

// Note the return type and state parameter
export async function formSubmitAction(
    prevState: FormState | null,  // Changed to allow null for initial state
    formData: FormData
): Promise<FormState> {  // Added explicit return type
    
    const symbol = formData.get("symbol");
   
    
    // Add your validation logic here
    if (!symbol) {
        return {
            errors: {
                symbol: ['Symbol is required']
            }
        };
    }
    
    // Your processing logic here
    
    //revalidatePath('/tradingJournal');
    
    // Return the new state
    return {
        errors: {},
        message: 'Success!'
    };
}