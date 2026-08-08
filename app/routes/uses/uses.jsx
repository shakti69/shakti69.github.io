import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './uses.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Uses',
    description: 'A list of hardware and software I use to do my thing',
  });
};

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Uses"
          description="A comprehensive list of tools, hardware, frameworks, and software I use daily for full-stack engineering, local AI development, cybersecurity, and e-sports video production."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Development & AI</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://code.visualstudio.com/">VS Code</Link> and <Link href="https://cursor.com/">Cursor</Link> are my primary code editors for full-stack projects, Flutter apps, and AI scripts.
                  </ListItem>
                  <ListItem>
                    For cross-platform mobile development, I build with <Link href="https://flutter.dev/">Flutter</Link> & Android Studio.
                  </ListItem>
                  <ListItem>
                    For web platforms, I use <Link href="https://nextjs.org/">Next.js</Link>, <Link href="https://react.dev/">React</Link>, JavaScript, C++, PHP, and Tailwind CSS.
                  </ListItem>
                  <ListItem>
                    For offline local AI & LLMs, I leverage <Link href="https://ollama.com/">Ollama</Link>, local open-weight LLMs, and Gemini APIs.
                  </ListItem>
                  <ListItem>
                    For backend databases and services, I rely on <Link href="https://supabase.com/">Supabase</Link>, MySQL, and Firebase.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Cybersecurity & Creative</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://www.kali.org/">Kali Linux</Link> is my operating system of choice for penetration testing, ethical hacking, and security research.
                  </ListItem>
                  <ListItem>
                    For network traffic analysis and diagnostics, I use <Link href="https://www.wireshark.org/">Wireshark</Link> alongside custom networking scripts.
                  </ListItem>
                  <ListItem>
                    For video editing, post-production, and e-sports content creation, I use <Link href="https://www.blackmagicdesign.com/products/davinciresolve">DaVinci Resolve</Link>.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>System Specs</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>CPU</TableHeadCell>
                    <TableCell>AMD Ryzen 5 5600GT</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>RAM</TableHeadCell>
                    <TableCell>16 GB Corsair Vengeance LPX DDR4</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Storage</TableHeadCell>
                    <TableCell>500 GB WD Blue SN580 NVMe SSD</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Operating System</TableHeadCell>
                    <TableCell>Windows 11 + Kali Linux (Dual Boot)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Code Editors</TableHeadCell>
                    <TableCell>VS Code, Cursor, Android Studio</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Version Control</TableHeadCell>
                    <TableCell>Git, GitHub (@shakti69)</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
