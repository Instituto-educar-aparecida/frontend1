import { useState } from "react";
import { MdSearch, MdMoreVert, MdPersonOff, MdPerson, MdDelete } from "react-icons/md";
import { useAdminUsers, useBlockUser, useDeleteUser } from "../hooks/use-admin-users";

const roleLabel: Record<string, string> = {
  ADMIN: "Admin",
  STUDENT: "Aluno",
  INSTRUCTOR: "Professor",
  SECRETARIA: "Secretaria",
};

const roleColor: Record<string, string> = {
  ADMIN: "bg-violet-600/20 text-violet-300",
  STUDENT: "bg-blue/20 text-blue",
  INSTRUCTOR: "bg-green/20 text-green",
  SECRETARIA: "bg-yellow/20 text-yellow",
};

export default function AdminUsersPage() {
  const { data: users = [], isLoading } = useAdminUsers();
  const blockUser = useBlockUser();
  const deleteUser = useDeleteUser();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("TODOS");
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const filtered = users.filter((u) => {
    const matchSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "TODOS" || u.role === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="overflow-y-auto h-[calc(100vh-70px)] px-8 py-6 bg-primary">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-100">Gestão de Usuários</h1>
            <p className="text-sm text-gray-400 mt-1">
              Gerencie alunos, professores e administradores.
            </p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-violet-600 text-white rounded-lg text-sm font-medium hover:bg-violet-700 transition-all">
            + Novo Usuário
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { label: "Total", value: users.length, color: "text-gray-100" },
            { label: "Alunos", value: users.filter(u => u.role === "STUDENT").length, color: "text-blue" },
            { label: "Professores", value: users.filter(u => u.role === "INSTRUCTOR").length, color: "text-green" },
            { label: "Inativos", value: users.filter(u => !u.active).length, color: "text-red" },
          ].map((s) => (
            <div key={s.label} className="bg-secondary rounded-2xl p-4 border border-white/5">
              <p className="text-xs text-gray-400 mb-1">{s.label}</p>
              <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Tabela */}
        <div className="bg-secondary rounded-2xl p-5 border border-white/5">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2 flex-1 min-w-48">
              <MdSearch className="text-gray-400" size={18} />
              <input
                placeholder="Buscar usuário..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-transparent text-sm text-gray-300 outline-none w-full"
              />
            </div>
            <div className="flex gap-2">
              {["TODOS", "STUDENT", "INSTRUCTOR", "ADMIN"].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`text-xs px-3 py-2 rounded-lg transition-all ${
                    filter === f
                      ? "bg-violet-600 text-white"
                      : "bg-white/5 text-gray-400 hover:bg-white/10"
                  }`}
                >
                  {f === "TODOS" ? "Todos" : roleLabel[f]}
                </button>
              ))}
            </div>
          </div>

          {isLoading ? (
            <p className="text-center text-gray-400 py-8">Carregando...</p>
          ) : (
            <table className="w-full text-sm">
              <thead>
                <tr className="text-xs text-gray-500 uppercase border-b border-white/5">
                  <th className="text-left pb-3 font-medium">Usuário</th>
                  <th className="text-left pb-3 font-medium">Função</th>
                  <th className="text-left pb-3 font-medium">Status</th>
                  <th className="text-left pb-3 font-medium">Cadastro</th>
                  <th className="text-left pb-3 font-medium">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filtered.map((u) => (
                  <tr key={u.id} className="hover:bg-white/5 transition-all">
                    <td className="py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-violet-600/30 flex items-center justify-center text-xs font-bold text-violet-300">
                          {u.name.slice(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <p className="text-gray-200 font-medium text-xs">{u.name}</p>
                          <p className="text-gray-500 text-xs">{u.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${roleColor[u.role]}`}>
                        {roleLabel[u.role]}
                      </span>
                    </td>
                    <td className="py-3">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        u.active ? "bg-green/10 text-green" : "bg-red/10 text-red"
                      }`}>
                        {u.active ? "Ativo" : "Inativo"}
                      </span>
                    </td>
                    <td className="py-3 text-xs text-gray-400">
                      {new Date(u.created_at).toLocaleDateString("pt-BR")}
                    </td>
                    <td className="py-3 relative">
                      <button
                        onClick={() => setOpenMenu(openMenu === u.id ? null : u.id)}
                        className="text-gray-500 hover:text-gray-300 transition-all"
                      >
                        <MdMoreVert size={18} />
                      </button>
                      {openMenu === u.id && (
                        <div className="absolute right-0 top-8 bg-secondary border border-white/10 rounded-xl shadow-xl z-10 w-44 py-1">
                          <button
                            onClick={() => { blockUser.mutate({ id: u.id, active: !u.active }); setOpenMenu(null); }}
                            className="flex items-center gap-2 w-full px-4 py-2 text-xs text-gray-300 hover:bg-white/5 transition-all"
                          >
                            {u.active ? <MdPersonOff size={16} /> : <MdPerson size={16} />}
                            {u.active ? "Bloquear" : "Desbloquear"}
                          </button>
                          <button
                            onClick={() => { deleteUser.mutate(u.id); setOpenMenu(null); }}
                            className="flex items-center gap-2 w-full px-4 py-2 text-xs text-red hover:bg-red/10 transition-all"
                          >
                            <MdDelete size={16} />
                            Excluir
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
            <span className="text-xs text-gray-500">
              Exibindo {filtered.length} de {users.length} usuários
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
