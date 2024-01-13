import { api } from '@/lib/axios';
import { useQuery } from '@tanstack/react-query';

export const GetPoly = () => {
    return useQuery({
        queryKey: ['poliklinik'],
        queryFn: async () =>
            await api.get(
                `pwa-referensi/get-poli`
            ),
    });
};
export const GetDoctor = (id_poli) => {
    return useQuery({
        queryKey: ['dokter', id_poli],
        queryFn: async () =>
            await api.get(
                `pwa-referensi/dokter-by-poli?id_poli=${id_poli}`
            ),
    });
};