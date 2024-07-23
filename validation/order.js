import { z } from 'zod';

export const orderSchema = z.object({
	cart: z.array(z.number()),
	total: z.number(),
	address: z.string(),
	name: z.string(),
	phone: z.string(),
});
