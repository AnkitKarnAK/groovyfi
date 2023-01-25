import szAxios from '@/configs/axios';

export const getData = async () => {
	const res = await szAxios.get('/products');
	return res.data;
};
