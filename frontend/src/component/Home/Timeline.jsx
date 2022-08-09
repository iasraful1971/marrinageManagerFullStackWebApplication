import { Badge, Button, Card, Grid, Group, Image, Space, Text, Timeline } from "@mantine/core";
import { IconGitBranch, IconGitCommit, IconGitPullRequest, IconMessageDots } from '@tabler/icons';
import { Link } from "react-router-dom";
const Timeliner = () => {
    return (
        <>
         <Space h="lg" />
         <Space h="lg" />
         <Space h="lg" />
         <Badge variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>Our Schedule</Badge>
         <Space h="lg" />
         <Space h="lg" />
      <Grid>
      <Grid.Col md={12} lg={6}>
            <Timeline active={1} bulletSize={24} lineWidth={2}>
      <Timeline.Item bullet={<IconGitBranch size={12} />} title="Section One">
        <Text color="dimmed" size="sm">You have to<Text variant="link" component="span" inherit>addition your personal Info</Text>  With Fjord Tours you can explore more of the magical fjord landscapes with tours and</Text>
        <Text size="xs" mt={4}>2 min need</Text>
      </Timeline.Item>

      <Timeline.Item bullet={<IconGitCommit size={12} />} title="Section Two">
        <Text color="dimmed" size="sm">Addition your educational <Text variant="link" component="span" inherit>Related information</Text>  With Fjord Tours you can explore more of the magical fjord landscapes with tours and</Text>
        <Text size="xs" mt={4}>1 min need</Text>
      </Timeline.Item>

      <Timeline.Item title="Section three" bullet={<IconGitPullRequest size={12} />} lineVariant="dashed">
        <Text color="dimmed" size="sm">You&apos;ve submitted business request<Text variant="link" component="span" inherit>Fix Them</Text>  With Fjord Tours you can explore more of the magical fjord landscapes with tours and</Text>
        <Text size="xs" mt={4}>4 minutes need</Text>
      </Timeline.Item>

      <Timeline.Item title="Section Four" bullet={<IconMessageDots size={12} />}>
        <Text color="dimmed" size="sm"><Text variant="link" component="span" inherit>Then Push your</Text> Biography to us   With Fjord Tours you can explore more of the magical fjord landscapes with tours and</Text>
        <Text size="xs" mt={4}>5 minutes need</Text>
      </Timeline.Item>
           </Timeline>
      </Grid.Col>
      <Grid.Col  md={12} lg={6}>
      <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section component="a" href="https://mantine.dev/">
        <Image
          src="https://images.pexels.com/photos/2291462/pexels-photo-2291462.jpeg?auto=compress&cs=tinysrgb&w=600"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>Be Mingle Be Happy</Text>
        <Badge color="pink" variant="light">
          Secure
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway.Then Push your Biography to us With Fjord Tours you can explore more of the magical fjord landscapes with tours andThen Push your Biography to us With Fjord Tours you can explore more of the magical fjord landscapes with tours andThen Push your Biography to us With Fjord Tours you can explore more of the magical fjord landscapes with tours.
      </Text>

      <Link style={{textDecoration:"none"}} to="/schedule"><Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Add Your Bio Data
      </Button></Link>
      </Card>
      </Grid.Col>
      
    </Grid> 
        </>
    );
};

export default Timeliner;