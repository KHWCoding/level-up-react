'use server';

export interface AddToCartState {
    success: boolean | null;
    cartSize?: number;
    message?: string;
}

export async function addToCart(id: string, prevState: AddToCartState, formData: FormData) {
    const formItemId = formData.get('itemID');
    if (formItemId === id && (prevState.cartSize === undefined || prevState.cartSize < 10)) {
        const newCartSize = prevState.cartSize ? prevState.cartSize + 1 : 1;
        return {
            success: true,
            cartSize: newCartSize
        };
    } else {
        return {
            success: false,
            message: "상품이 매진되었습니다"
        };
    }
}