import React from 'react'; 
import ( Badge ) from '.Badge';

interface DataRow {
  id: number,;
  name: string;
  email: string;
  status: 'Ativo' | 'Pendente';
  role: string;
}

interface DataTableProps {
  data: DataRow[]
}

export const DataTable: React.FC<DataTableProps> = ({ data }) => {
  
  return (
    <div className="w-full overflow-x-auto rounded-xl border border-gray-800 bg-[#141417]">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-800 text-gray-500 text-sm">
            <th className="p-4 font-medium">Usuário</th>
            <th className="p-4 font-medium">Cargo</th>
            <th className="p-4 font-medium">Status</th>
            <th className="p-4 font-medium text-right">Ações</th>
          </tr>
        </thead>
        <tbody className="text-gray-300">
          {data.map((item) => (
            <tr key={item.id} className="border-b border-gray-800/50 hover:bg-white/5 transition-colors">
              <td className="p-4">
                <div className="flex flex-col">
                  <span className="font-semibold text-white">{item.name}</span>
                  <span className="text-xs text-gray-500">{item.email}</span>
                </div>
              </td>
              <td className="p-4 text-sm">{item.role}</td>
              <td className="p-4">
                <Badge variant={item.status === 'Ativo' ? 'success' : 'warning'}>
                  {item.status}
                </Badge>
              </td>
              <td className="p-4 text-right">
                <button className="text-purple-400 hover:underline text-sm font-medium">Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div> 
  );
};
