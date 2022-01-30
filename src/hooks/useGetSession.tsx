import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { db } from "../db/config";

export const useGetSession = () => {
  const { push } = useRouter();
  const [isLoading, setLoading] = useState(true);
  const [session, setSession] = useState<ISession>({} as ISession);

  console.log(session);

  const handleGetSession = async () => {
    try {
      setLoading(true);
      const session = db.auth.session();

      if (!session) {
        push("/");
        return;
      }

      setSession(session as ISession);
      push("/account");

      db.auth.onAuthStateChange((e, session) => {
        setSession(session as ISession);
      });
    } catch (e) {
    } finally {
    }
  };

  useEffect(() => {
    handleGetSession();
  }, []);

  return {};
};

interface ISession {
  access_token: string;
  expires_at: number;
  expires_in: number;
  provider_token: null;
  refresh_token: string;
  token_type: string;
  user: IUser;
}

interface IUser {
  app_metadata: { provider: string; providers: string[] };
  aud: string;
  confirmation_sent_at: string;
  confirmed_at: string;
  created_at: string;
  email: string;
  email_confirmed_at: string;
  id: string;
  identities: any[];
  last_sign_in_at: string;
  phone: string;
  recovery_sent_at: string;
  role: string;
  updated_at: string;
  user_metadata: any;
}
