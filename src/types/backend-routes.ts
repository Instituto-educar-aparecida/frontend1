export enum BackendRoutes {
  LOGIN = " /auth/login", // Endpoint para autenticação de usuários
  LOGOUT = "/auth/logout", // Endpoint para encerrar a sessão do usuário
  REGISTER = "/auth/register", // Endpoint para registro de novos usuários
  GET_USERS = "/auth/getUsers", //Acesso restrito a administradores
  STUDENT_DASHBOARD = "/aluno/dashboard", // Endpoint para obter dados do dashboard do aluno
  ADMIN = "/admin/painel", // Endpoint para acessar o painel administrativo
  ADMIN_USERS = "/admin/usuarios", // Endpoint para gerenciar usuários no painel administrativo
  ADMIN_SET_TEACHER = "/admin/vincular", // Endpoint para definir um usuário como professor
  MOVIE = "/video/data/:videoId", // Endpoint para obter dados de um vídeo específico
  TEACHER_DASHBOARD = "/professor/dashboard", // Endpoint para acessar dados relacionados ao professor
  TEACHER_MATTERS = "/professor/materia/:materiaId", // Endpoint para acessar as matérias associadas ao professor
  LESSON_PROGRESS_UPDATE = "/aula/progresso", // Endpoint para salvar o progresso da aula
  CLASSROOM_COMPLETED = "/aula/progresso/concluidas", // Endpoint para obter o status das aulas concluídas
  CLASSROOM_PROGRESS = "/aula/progresso/:lesson_id", // Endpoint para obter o progresso de uma aula específica
}
